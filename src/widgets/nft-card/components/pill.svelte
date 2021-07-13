<script>
  // your script goes here
</script>

<div class="asset-detail">
  <div class="asset-detail-type">
    <a class="asset-link" target="_blank" href="http://opensea.io/assets/josie">
      <!-- pills -->
      <div
        class="pill "
        style="color: rgb(130, 130, 130); border: 1px solid rgb(226, 230, 239);"
      >
        <img
          alt=""
          src="https://lh3.googleusercontent.com/MH5BjzH36amUJIvYTs1C4ty-ZRcNp9heRIwKCHdEiFmgFISOzvLHhzKEIwtoYNUkfr_1m4or1EA7LAXoJF0lPd0=s120"
        />

        <p><!---->Josie<!----></p>
      </div>
    </a>
  </div>
</div>

<style>
  .asset-detail {
    display: flex;
  }

  .asset-detail .asset-detail-type {
    height: 35px;
    font-size: 12px;
    margin-right: 10px;
  }
  /* .asset-detail .asset-detail-badge {
    width: 54px;
    height: 30px;
    font-size: 12px;
  } */

  .asset-link {
    text-decoration: none;
    color: #222222;
  }

  /* // pill */

  .pill {
    display: flex;
    /* grid-template-columns: 1fr 2fr; */
    border: 1px solid #e2e6ef;
    box-sizing: border-box;
    border-radius: 60px;
    width: 100%;
    height: 100%;
    padding: 6px 12px 6px 6px;
  }
  .pill img {
    height: 100%;
    border-radius: 50px;
    margin-right: 6px;
    /* width: 100%; */
    /* padding: 3px; */
    /* box-sizing: border-box; */
  }
  .pill p {
    text-align: center;
    align-self: center;
    margin: auto;
    white-space: nowrap;
    /* Centers text since grid-template-columns auto has glitch */
    /* transform: translateX(-10%); */
    backface-visibility: inherit;
  }
</style>
