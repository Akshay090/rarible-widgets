<script>
  import InfoBtn from './info-btn.svelte'
  import Pill from './pill.svelte'

  export let nftData
  export let contractAddress
  export let tokenId

  let previewPic

  if (nftData.image.url.PREVIEW) {
    previewPic = nftData.image.url.PREVIEW
  }
</script>

<div class="card-front">
  <!-- info btn -->
  <InfoBtn on:filp />

  <div class="asset-image-container">
    <a
      target="_blank"
      href={`https://rarible.com/token/${contractAddress}:${tokenId}`}
    >
      <div
        class="asset-image"
        style={`background-image: url(${previewPic}); background-size: contain;`}
      />
    </a>
  </div>

  <div class="asset-details-container">
    <Pill />

    <div class="spacer" />
    <div class="asset-detail-name">
      <a
        class="asset-link"
        target="_blank"
        href={`https://rarible.com/token/${contractAddress}:${tokenId}`}
        >{nftData.name}</a
      >
    </div>

    <div class="asset-detail-price">
      <a
        class="asset-link"
        target="_blank"
        href={`https://rarible.com/token/${contractAddress}:${tokenId}`}
      >
        <div class="asset-detail-price">
          <div class="previous-value">Prev.&nbsp;</div>

          <img
            alt=""
            src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
          />
          <div class="asset-detail-price value previous-value">20</div>
        </div>
      </a>
    </div>

    <div class="asset-action-buy">
      <button> buy this item ❯ </button>
    </div>
  </div>
</div>

<style>
  /* Global part */
  :host {
    all: initial;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  .asset-link {
    text-decoration: none;
    color: #222222;
  }

  /* end - Global Part */
  .card-front {
    position: absolute;
    backface-visibility: hidden;
    background: #ffffff;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateY(0);
    overflow: hidden;
  }
  .is-vertical {
    grid-template-columns: 100%;
    grid-template-rows: 60% 40%;
  }
  .card-front p {
    margin: 0;
  }

  .asset-image-container {
    border-right: 1px solid #e2e6ef;
    background-size: cover;
    box-sizing: border-box;
  }

  .asset-image {
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
    height: 100%;
    box-sizing: border-box;
  }

  .is-vertical .asset-image-container {
    border-bottom: 1px solid #e2e6ef;
    border-right: none;
    width: 100%;
  }

  .asset-details-container {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    align-items: center;
  }
  .asset-detail-name {
    font-weight: 400;
    text-align: left;
  }

  .asset-detail-price {
    text-align: right;
  }
  .asset-detail-price {
    font-size: 18px;
    font-weight: 400;
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    align-items: baseline;
  }
  .asset-detail-price img {
    margin-left: 5px;
    width: 15px;
    align-self: center;
  }
  .asset-detail-price .value {
    margin-left: 5px;
  }
  .asset-detail-price .previous-value {
    font-size: 14px;
    color: #828282;
  }
  .asset-action-buy {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .asset-action-buy button {
    width: 100%;
    background: #3291e9;
    border-radius: 5px;
    height: 35px;
    color: white;
    font-weight: bold;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: 200ms;
    outline: none;
    border-style: none;
    text-transform: uppercase;
  }
  .asset-action-buy button:hover {
    background: rgb(21, 61, 98);
  }

  .no-img {
    grid-template-columns: 100%;
  }
  .no-img p {
    /* Reverts transform (see above) */
    /* transform: none; */
  }
</style>
