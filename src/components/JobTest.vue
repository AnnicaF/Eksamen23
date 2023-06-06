<template>
    <div>
      <div class="filter-bar">
        <select v-model="selectedType">
          <option value="">Alle typer</option>
          <option v-for="type in uniqueTypes" :value="type" :key="type">{{ type }}</option>
        </select>
        <select v-model="selectedCity">
          <option value="">Alle byer</option>
          <option v-for="city in uniqueCities" :value="city" :key="city">{{ city }}</option>
        </select>
        <select v-model="selectedRegion">
          <option value="">Alle regioner</option>
          <option v-for="region in uniqueRegions" :value="region" :key="region">{{ region }}</option>
        </select>
        <select v-model="sortBy" @change="applySort">
          <option value="">Sorter efter</option>
          <option value="today">I dag</option>
          <option value="thisWeek">Denne uge</option>
          <option value="thisMonth">Denne måned</option>
          <option value="all">Alle</option>
        </select>
        <button class="btn-small" @click="resetFilters">Nulstil</button>
      </div>
  
      <div class="box-container">
        <div class="box" v-for="(box, index) in filteredBoxes" :key="index">
          <h3 class="box-title sort">{{ box.title }}</h3>
          <p  class="box-text sort" >{{ box.text }}</p>
          <div class="box-buttons">
            <button class="button1">{{ box.button1 }}</button>
            <button class="button2">{{ box.button2 }}</button>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        boxes: [
          {
            title: 'Rørlægger i Randers',
            text: 'På vegne af vores samarbejdspartner søger vi en dygtig rørlægger nær Randers til at arbejde med renoveringsopgaver af hovedledninger og vand. Virksomheden er en jordnær entreprenørvirksomhed, der har gode og…',
            button1: 'Læs mere',
            button2: 'Ansøg her',
            type: 'Rørlægger',
            city: 'Randers',
            region: 'Midtjylland',
            date: '2023-06-01' 
          },
          {
            title: 'Maskinfører søges i Grindsted',
            text: 'På vegne af vores samarbejdspartner søger vi en dygtig maskinfører nær Grindsted. Arbejdet består i at føre gravemaskiner i 14 til 25 tons med gps-styring. Virksomheden er en jordnær entreprenørvirksomhed, der har gode og trofaste kunder i lokalområdet..',
            button1: 'Læs mere',
            button2: 'Ansøg her',
            type: 'Maskinfører',
            city: 'Grindsted',
            region: 'Syddanmark',
            date: '2023-05-31'
          },
          {
            title: 'Murer i Stubbekøbing',
            text: 'På vegne af vores samarbejdspartner søger vi en dygtig rørlægger nær Randers til at arbejde med renoveringsopgaver af hovedledninger og vand. Virksomheden er en jordnær entreprenørvirksomhed, der har gode og…',
            button1: 'Læs mere',
            button2: 'Ansøg her',
            type: 'Murer',
            city: 'Randers',
            region: 'Midtjylland',
            date: '2023-06-06' 
          },
          {
            title: 'Maler i Århus',
            text: 'På vegne af vores samarbejdspartner søger vi en velkvalificeret og erfaren bygningsmaler nær Aarhus. Arbejdsområdet er et etageejendom, hvor der skal udføres meget forskelligt malerarbejde. Der er tale om alle…',
            button1: 'Læs mere',
            button2: 'Ansøg her',
            type: 'Maler',
            city: 'Århus',
            region: 'Nordjylland',
            date: '2023-06-19' 
          },
          {
            title: 'VVS-montør i København',
            text: 'På vegne af vores samarbejdspartner søger vi kvalitetsbevidste VVS-montører i København. Et job, hvor vand, varme og gas er omdrejningspunktet og der er stort fokus på at levere de bedste…',
            button1: 'Læs mere',
            button2: 'Ansøg her',
            type: 'VVS',
            city: 'København',
            region: 'Hovedstaden',
            date: '2023-06-10' 
          },
        ],
        selectedType: '',
        selectedCity: '',
        selectedRegion: '',
        sortBy: ''
      };
    },
    computed: {
      filteredBoxes() {
        let filtered = this.boxes;
  
        if (this.selectedType) {
          filtered = filtered.filter(box => box.type === this.selectedType);
        }
        if (this.selectedCity) {
          filtered = filtered.filter(box => box.city === this.selectedCity);
        }
        if (this.selectedRegion) {
          filtered = filtered.filter(box => box.region === this.selectedRegion);
        }
  
        filtered = this.sortBoxes(filtered, this.sortBy);
  
        return filtered;
      },
      uniqueTypes() {
        return Array.from(new Set(this.boxes.map(box => box.type)));
      },
      uniqueCities() {
        return Array.from(new Set(this.boxes.map(box => box.city)));
      },
      uniqueRegions() {
        return Array.from(new Set(this.boxes.map(box => box.region)));
      }
    },
    methods: {
      resetFilters() {
        this.selectedType = '';
        this.selectedCity = '';
        this.selectedRegion = '';
        this.sortBy = '';
      },
      sortBoxes(boxes, sortBy) {
        switch (sortBy) {
          case 'today':
            return boxes.filter(box => this.isToday(box));
          case 'thisWeek':
            return boxes.filter(box => this.isThisWeek(box));
          case 'thisMonth':
            return boxes.filter(box => this.isThisMonth(box));
          case 'all':
          default:
            return boxes;
        }
      },
      isToday(box) {
        const today = new Date();
        const boxDate = new Date(box.date);
        return boxDate.toDateString() === today.toDateString();
      },
      isThisWeek(box) {
        const today = new Date();
        const boxDate = new Date(box.date);
        const diff = today.getDate() - boxDate.getDate();
        return diff <= 7 && diff >= 0;
      },
      isThisMonth(box) {
        const today = new Date();
        const boxDate = new Date(box.date);
        return (
          boxDate.getMonth() === today.getMonth() && boxDate.getFullYear() === today.getFullYear()
        );
      },
      applySort() {
        this.$forceUpdate();
      }
    }
  };
</script>
  
  
  