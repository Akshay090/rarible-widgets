<svelte:options tag="rarible-widget" />

<script>
  import NftCard from './widgets/nft-card/nft-card.svelte'

  export let contractAddress
  export let tokenId
</script>

<NftCard contractAddress="0xd07dc4262bcdbf85190c01c996b4c06a461d2430" tokenId="640570" />

<style global type="text/scss" lang="scss" src="./index.scss">
</style>
