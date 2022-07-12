<script>
  let count = 0;
  const increment = () => {
    count = count + 1
  };
  const decrement = () => {
    count = count - 1;
  };
</script>

<div class="d-flex align-items-center mt-4">
  <button
    class="btn btn-outline-primary"
    on:click={decrement}
  >-</button>
  <p
    class="mb-0 mx-4"
  >{count}</p>
  <button
    class="btn btn-outline-primary"
    on:click={increment}
  >+</button>
</div>

<style></style>
