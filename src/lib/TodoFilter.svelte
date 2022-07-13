<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let filter;
</script>

<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button
    type="button"
    class="btn btn-outline-primary"
    class:active={filter === 'ALL'}
    on:click={() => dispatch('set-filter', 'ALL')}
  >All</button>
  <button
    type="button"
    class="btn btn-outline-primary"
    class:active={filter === 'FINISHED'}
    on:click={() => dispatch('set-filter', 'FINISHED')}
  >Finished</button>
  <button
    type="button"
    class="btn btn-outline-primary"
    class:active={filter === 'UNFINISHED'}
    on:click={() => dispatch('set-filter', 'UNFINISHED')}
  >Unfinished</button>
</div>
