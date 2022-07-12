<script>
  import Navbar from './lib/Navbar.svelte';
  import Counter from './lib/Counter.svelte';
</script>

<Navbar brand={"The Counter"} />
<div class="contaier">
  <div class="row justify-content-center">
    <div class="col-12 col-lg-4">
      <Counter />
    </div>
  </div>
</div>


<style></style>
