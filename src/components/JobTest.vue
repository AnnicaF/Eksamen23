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
        <button @click="resetFilters">Nulstil</button>
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
            title: 'Rørlægger i randers',
            text: 'På vegne af vores samarbejdspartner søger vi en dygtig rørlægger nær Randers til at arbejde med renoveringsopgaver af hovedledninger og vand. Virksomheden er en jordnær entreprenørvirksomhed, der har gode og…',
            button1: 'Læs mere',
            button2: 'Ansøg her',
            type: 'Rørlægger',
            city: 'Randers',
            region: 'Midtjylland',
            date: '2023-05-31' 
          },
          {
            title: 'Rørlægger i randers',
            text: 'På vegne af vores samarbejdspartner søger vi en dygtig rørlægger nær Randers til at arbejde med renoveringsopgaver af hovedledninger og vand. Virksomheden er en jordnær entreprenørvirksomhed, der har gode og…',
            button1: 'Læs mere',
            button2: 'Ansøg her',
            type: 'VVs',
            city: 'Odense',
            region: 'Syddanmark',
            date: '2023-04-31'
          },
          {
            title: 'Rørlægger i randers',
            text: 'På vegne af vores samarbejdspartner søger vi en dygtig rørlægger nær Randers til at arbejde med renoveringsopgaver af hovedledninger og vand. Virksomheden er en jordnær entreprenørvirksomhed, der har gode og…',
            button1: 'Læs mere',
            button2: 'Ansøg her',
            type: 'Rørlægger',
            city: 'Randers',
            region: 'Midtjylland',
            date: '2023-05-29' 
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
  
  
  