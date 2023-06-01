<template>
    <div class="box-container">
      <div class="box" v-for="(box, index) in boxes" :key="index">
        <h3>{{ box.title }}</h3>
        <p class="sort">{{ box.text }}</p>
        <div class="box-buttons">
          <button class="btn">{{ box.button1 }}</button>
          <button class="btn-primary">{{ box.button2 }}</button>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        boxes: [
          { title: 'Rørlægger i randers', text: 'På vegne af vores samarbejdspartner søger vi en dygtig rørlægger nær Randers til at arbejde med renoveringsopgaver af hovedledninger og vand. Virksomheden er en jordnær entreprenørvirksomhed, der har gode og…', button1: 'Læs mere', button2: 'Ansøg her' },
          { title: 'Maskinfører søges i grindsted', text: 'På vegne af vores samarbejdspartner søger vi en dygtig maskinfører nær Grindsted. Arbejdet består i at føre gravemaskiner i 14 til 25 tons med gps-styring. Virksomheden er en jordnær entreprenørvirksomhed,…', button1: 'Læs mere', button2: 'Ansøg her' },
          { title: 'Rørlægger i vemb', text: 'På vegne af vores samarbejdspartner søger vi en dygtig rørlægger nær Vemb til arbejde med kloakering. Det er derfor vigtigt, at du har bevis til kloakarbejde som rørlægger. Virksomheden er…', button1: 'Læs mere', button2: 'Ansøg her' },
          { title: 'Murere søges i stubbekøbing', text: 'På vegne af vores samarbejdspartner søger vi dygtige murere nær Stubbekøbing til at hjælpe med at skalmure huse henover sommeren. Du vil komme til at arbejde sammen med et hold…', button1: 'Læs mere', button2: 'Ansøg her' },
          { title: 'Maler søges i Aarhus', text: 'På vegne af vores samarbejdspartner søger vi en velkvalificeret og erfaren bygningsmaler nær Aarhus. Arbejdsområdet er et etageejendom, hvor der skal udføres meget forskelligt malerarbejde. Der er tale om alle…', button1: 'Læs mere', button2: 'Ansøg her' },
          { title: 'VVS-Montører søges i København', text: 'På vegne af vores samarbejdspartner søger vi kvalitetsbevidste VVS-montører i København. Et job, hvor vand, varme og gas er omdrejningspunktet og der er stort fokus på at levere de bedste…', button1: 'Læs mere', button2: 'Ansøg her' },
          { title: 'Elektrikere søges i trekantsområdet', text: 'Er du en dygtig faglært, som ikke har noget imod at arbejde selvstændigt? Vi har lige nu en spændende kunde, der efterspørger elektrikere til både service og industri. Virksomheden er…', button1: 'Læs mere', button2: 'Ansøg her' }
        ]
      };
    }
  };
</script>
  