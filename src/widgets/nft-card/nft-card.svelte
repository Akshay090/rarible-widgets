<script>
  import InfoBtn from './components/info-btn.svelte'
  import Pill from './components/pill.svelte'

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
    <div class="card-front">
      <!-- info btn -->
      <InfoBtn on:filp={flipCard} />

      <div class="asset-image-container">
        <a
          target="_blank"
          href="https://opensea.io/assets/0xecf7ef42b57ee37a959bf507183c5dd6bf182081/7"
        >
          <div
            class="asset-image"
            style="background-image: url(&quot;https://lh3.googleusercontent.com/sJ-5wTKPHUJNePVxCGRV4UTsOf8TvY6r0ML89J9EuDWNrA8CljGT9TAhCv9afmyJJI2s8QNKcvbXP5erh0EKBjwX=s250&quot;); background-size: contain;"
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
            href="https://opensea.io/assets/0xecf7ef42b57ee37a959bf507183c5dd6bf182081/7"
            ><!---->Tune In #6<!----></a
          >
        </div>

        <div class="asset-detail-price">
          <a
            class="asset-link"
            target="_blank"
            href="https://opensea.io/assets/0xecf7ef42b57ee37a959bf507183c5dd6bf182081/7"
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

    <div class="card-back">
      <InfoBtn on:filp={flipCard} />

      <div class="card-back-inner">
        <div class="attribute-container attribute-properties">
          <div class="trait-header">
            <div class="trait-icon">
              <svg
                width="18"
                height="100%"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2.00001H9.33333V0.666672H0V2.00001ZM0 4.66667H9.33333V3.33334H0V4.66667ZM0 7.33334H9.33333V6H0V7.33334ZM10.6667 7.33334H12V6H10.6667V7.33334ZM10.6667 0.666672V2.00001H12V0.666672H10.6667ZM10.6667 4.66667H12V3.33334H10.6667V4.66667Z"
                  fill="#1C1F27"
                />
              </svg>
            </div>
            <p class="attribute-title">Properties</p>
          </div>

          <!---->
          <div
            class="trait_property"
            style="height: 50px; margin-bottom: 10px;"
          >
            <p class="trait_property-type"><!---->artist<!----></p>
            <p class="trait_property-value"><!---->Josephine Bellini<!----></p>
          </div>
          <!---->
          <div
            class="trait_property"
            style="height: 50px; margin-bottom: 10px;"
          >
            <p class="trait_property-type"><!---->edition info<!----></p>
            <p class="trait_property-value"><!---->6 of 20<!----></p>
          </div>
          <!---->

          <a
            class="remaining-traits"
            target="_blank"
            href="https://opensea.io/assets/0xecf7ef42b57ee37a959bf507183c5dd6bf182081/7"
            >+3 more</a
          >
        </div>

        <div class="attribute-container" />
        <div class="attribute-container attribute-boosts" />
      </div>
    </div>
  </div>
</div>

<style type="text/scss" lang="scss" src="./nft-card.scss">
</style>
