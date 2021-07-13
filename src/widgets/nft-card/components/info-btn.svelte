<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
</script>

<div style="position: absolute; top: 5px; right: 5px">
  <div class="asset-action-info" on:click={() => dispatch('filp')}>
    <svg
      id="info-btn"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="transparent" />
      <path
        id="info-icon"
        fill="rgb(82, 87, 89)"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
      />
    </svg>
  </div>
</div>

<style>
  /* Global part */
  :host {
    all: initial;
  }

  /* end - Global Part */
  .asset-action-info {
    cursor: pointer;
    transition: 200ms;
    opacity: 0.4;
    backface-visibility: hidden;
  }
  .asset-action-info #info-icon:hover {
    opacity: 1;
  }
</style>
