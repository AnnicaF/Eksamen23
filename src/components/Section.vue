<template>
    <section>
      <h2>Min sektion</h2>
      <div class="boxes">
        <div class="box1">
          <h5>Vission</h5>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
        </div>
        <div class="box2">
          <h5>Mission</h5>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
        </div>
        <div class="box3">
          <h5>Værdier</h5>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  section {
    background: #FDF8F1;
    height: 500px;
  }
  .box1 { grid-area: a;}
  .box2 { grid-area: b;}
  .box3 { grid-area: c;}
  .boxes {
    display: grid;
    grid-template-areas: 'a b c';
    gap: 20px;
    justify-items: center;
  }
  .box1, .box2, .box3 {
    background-color: #fff;
    padding: 20px;
    width: 200px;
    height: 300px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    border: 3px solid #F3AE3D;
  }
  h5{
    font-size: 20px;
    text-align: center;
  }
  p{
    font-size:16px;
  }
  @media screen and (max-width: 800px) {
  .boxes {
    grid-template-areas: 
    'a b'
    'c c';
    align-items: center;
    padding:40px;
  }
  section {
    background: #FDF8F1;
    height: 800px;
  }
}
@media screen and (max-width: 600px) {
  .boxes {
    grid-template-areas: 
    'a'
    'b'
    'c';
  }
}
  </style>