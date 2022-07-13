<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let inputText = '';

  const handleSubmit = () => {
    dispatch('submit-form', inputText);
    inputText = '';
  };
</script>

<form
  class="d-flex"
  role="search"
  on:submit|preventDefault={handleSubmit}
>
  <input
    class="form-control me-2"
    type="search"
    placeholder="enter todo"
    aria-label="Enter todo"
    bind:value={inputText}
  />
  <button
    class="btn btn-outline-success"
    type="submit"
  >Add</button>
</form>
