<script>
  import InfoBtn from './info-btn.svelte'

  // your script goes here
</script>

<div class="card-back">
  <InfoBtn on:filp />

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
      <div class="trait_property" style="height: 50px; margin-bottom: 10px;">
        <p class="trait_property-type"><!---->artist<!----></p>
        <p class="trait_property-value"><!---->Josephine Bellini<!----></p>
      </div>
      <!---->
      <div class="trait_property" style="height: 50px; margin-bottom: 10px;">
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

<style>
  /* Global part */
  :host {
    all: initial;
  }
  p {
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* end - Global Part */
  .card-back {
    position: absolute;
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    transform: rotateY(180deg) translateZ(1px);
    top: 0;
    overflow: hidden;
    padding: 16px 24px;
    box-sizing: border-box;
    font-size: 15px;
    font-weight: 400;
  }
  .card-back p {
    margin: 10px;
  }
  .card-back-inner {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 33%));
    column-gap: 10px;
    height: 100%;
  }
  .is-vertical {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, minmax(auto, 33%));
  }
  .attribute-container {
    text-align: left;
    text-transform: capitalize;
  }
  .is-vertical .attribute-container {
    margin: 15px 0;
  }
  .trait-header {
    display: flex;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    line-height: 20px;
    margin-bottom: 10px;
  }
  .trait-header p {
    margin: 0 0 10px 8px;
  }
  .trait-icon {
    height: 100%;
  }
  .trait_property {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    background: #edfbff;
    border: 1px solid #2d9cdb;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid #2d9cdb;
    background-color: #edfbff;
    border-radius: 6px;
    padding: 8px;
  }
  .trait_property p {
    margin: 7px 0;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.87);
  }
  .trait_property .trait_property-type {
    margin: 0;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 500;
    color: #2d9cdb;
    opacity: 0.8;
  }
  .trait_property .trait_property-value {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
    color: rgba(0, 0, 0, 0.87);
  }
  .trait_ranking {
    margin-bottom: 16px;
    cursor: pointer;
  }
  .trait_ranking .trait_ranking-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .trait_ranking .trait_ranking-header .trait_ranking-header-name {
    color: rgba(0, 0, 0, 0.87);
    font-size: 14px;
  }

  .trait_ranking .trait_ranking-header .trait_ranking-header-value {
    color: #9e9e9e;
    font-size: 11px;
    text-transform: none;
  }
  .trait_ranking .trait_ranking-bar {
    width: 100%;
    height: 6px;
    border-radius: 14px;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    position: relative;
    background: #f3f3f3;
    margin-top: 4px;
  }

  .trait_ranking .trait_ranking-bar .trait_ranking-bar-fill {
    position: absolute;
    left: 1px;
    top: 1px;
    height: 4px;
    background: #3291e9;
    border-radius: 14px;
    max-width: calc(100% - 2px);
  }
  .trait-header-stats {
    margin-bottom: 0;
  }
  .stat {
    display: grid;
    grid-template-columns: 1fr 4fr;
    justify-items: left;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .stat-name {
    text-transform: capitalize;
    margin-left: 5px;
  }
  .stat-value {
    color: #2d9cdb;
    font-size: 25px;
    font-weight: 300;
    margin-left: 5px;
  }
  .trait_boost {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .trait_boost .trait_boost-value {
    width: 30px;
    height: 30px;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }
  .trait_boost .trait_boost-value p {
    font-size: 16px;
    color: #2d9cdb;
  }
  .remaining-traits {
    text-transform: none;
    font-weight: bold;
    margin-top: 10px;
    display: block;
  }
</style>
