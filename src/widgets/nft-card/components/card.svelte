<script>
  import CardBack from './card-back.svelte'
  import CardFront from './card-front.svelte'
  import Loader from './loader.svelte'

  export let loading
  export let nftData
  export let contractAddress
  export let tokenId
  let flipped = false
  function flipCard() {
    flipped = !flipped
  }
</script>

<div
  class={flipped ? 'card flipped-card' : 'card'}
  style="width: 80vw; height: 210px; min-height: 200px; max-width: 670px;"
>
  <div class="card-inner">
    <!-- front part -->
    {#if loading == true}
      <div class="center"><Loader /></div>
    {:else if nftData === 'ERROR'}
      <div class="center">Opps!! There was some error</div>
    {:else}
      <CardFront {nftData} {contractAddress} {tokenId} on:filp={flipCard} />
      <CardBack {nftData} on:filp={flipCard} />
    {/if}
  </div>
</div>

<style>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
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
