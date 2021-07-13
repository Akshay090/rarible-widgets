<script>
  import CardBack from './components/card-back.svelte'
  import CardFront from './components/card-front.svelte'
  import InfoBtn from './components/info-btn.svelte'

  // your script goes here
  let flipped = false
  function flipCard() {
    console.log('flip clicked')
    flipped = !flipped
  }
</script>

<div
  class={flipped ? 'card flipped-card' : 'card'}
  style="width: 80vw; height: 210px; min-height: 200px; max-width: 670px;"
>
  <div class="card-inner">
    <!-- front part -->
    <CardFront on:filp={flipCard} />
    <CardBack on:filp={flipCard} />
  </div>
</div>

<style>
  .card {
    background-color: white;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    border-radius: 5px;
    perspective: 1000px;
    margin: auto;
  }
  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
  .flipped-card .card-inner {
    transform: rotateY(180deg);
  }
  .card .error {
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .card .error-moji {
    font-size: 50px;
  }
  .card .error-message {
    font-size: 16px;
  }
</style>
