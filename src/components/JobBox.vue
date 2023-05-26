<template>
    <div class="job-container">
      <div v-for="jobstilling in jobstillinger" :key="jobstilling.id" class="job-box">
        <h3>{{ jobstilling.overskrift }}</h3>
        <p>{{ jobstilling.beskrivelse }}</p>
        <div class="buttons">
          <button class="button-01">Læs mere</button>
          <button class="button-02">Ansøg</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        jobstillinger: [] // Opbevar jobstillingerne i data
      };
    },

    mounted() {
        console.log('on mounted'); 
        axios.get('/jobstillinger').the((response) => {
            console.log(response);
          }).catch(error); {
            console.error(error);
            }  
        }
    };

  </script>
  
  <style scoped>
  .job-box {
    width: 800px;
    height: 200px;
    flex-direction: column;
    align-items: flex-start;
    display: flex;
    margin-left: 100px;
    margin-right: 100px;
    border: 3px solid black;
    padding: 20px;
  }
  </style>