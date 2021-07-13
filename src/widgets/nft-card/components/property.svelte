<script>
  // your script goes here
  export let key
  export let value

  function processKey(key) {
    const words = key.split('_').join(' ')
    return words
  }
</script>

<div class="trait_property" style="height: 50px; margin-bottom: 10px;">
  <p class="trait_property-type">{processKey(key)}</p>
  <p class="trait_property-value">{value}</p>
</div>

<style>
  /* your styles go here */
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
</style>
