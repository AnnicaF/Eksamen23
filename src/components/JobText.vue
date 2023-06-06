<template>
    <div class="baggrund">
      <div class="jobbeskrivelse">
        <div class="text-container">
          <div class="text-box1">
            <p>{{ jobbeskrivelse }}</p>
          </div>
          <div class="text-box2">
            <button class="btn-primary">Ansøg nu</button>
            <ul>
              <li>{{ rolle }}</li>
              <li>{{ sted }}</li>
              <li>{{ fuldTid }}</li>
              <li>{{ start }}</li>
            </ul>
          </div>
        </div>
        <div class="text-box3">
          <h5>Om dig:</h5>
          <ul>
            <li v-for="krav in kravListe" :key="krav">{{ krav }}</li>
          </ul>
          <p>{{ ansogningTekst }}</p>
          <h5>{{ fordeleOverskrift }}</h5>
          <ul>
            <li v-for="fordele in fordeleListe" :key="fordele">{{ fordele }}</li>
          </ul>
          <p>{{ ansogningTekst2 }}</p>
          <p>Vi glæder os til at høre fra dig.</p>
        </div>
        <div class="button-box">
          <button class="btn">Kontakt os</button>
          <button class="btn-primary">Ansøg nu</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      jobbeskrivelse: {
        type: String,
        required: true,
      },
      rolle: {
        type: String,
        required: true,
      },
      sted: {
        type: String,
        required: true,
      },
      fuldTid: {
        type: String,
        required: true,
      },
      start: {
        type: String,
        required: true,
      },
      kravListe: {
        type: Array,
        required: true,
      },
      ansogningTekst: {
        type: String,
        required: true,
      },
      fordeleOverskrift: {
        type: String,
        required: true,
      },
      fordeleListe: {
        type: Array,
        required: true,
      },
      ansogningTekst2: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  

  