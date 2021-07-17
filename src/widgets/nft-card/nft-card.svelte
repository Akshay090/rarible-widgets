<script>
  import { onMount } from 'svelte'

  import Card from './components/card.svelte'

  export let contractAddress
  export let tokenId
  let nftData = null
  let loading = true

  onMount(() => {
    fetch(
      `https://api.rarible.com/protocol/v0.1/ethereum/nft/items/${contractAddress}:${tokenId}/meta`,
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        nftData = data
        loading = false
        console.log('data set')
      })
      .catch(error => {
        console.log(error)
        nftData = 'ERROR'
        loading = false
      })
  })

  // your script goes here
</script>

<Card {loading} {nftData} {contractAddress} {tokenId} />

<style>
  /* your styles go here */
</style>
