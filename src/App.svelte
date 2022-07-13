<script>
  import Navbar from './lib/Navbar.svelte';
  import TodoCard from './lib/TodoCard.svelte';
</script>

<Navbar brand={"The Counter"} />
<div class="contaier">
  <div class="row justify-content-center">
    <div class="col-12 col-lg-4">
      <TodoCard />
    </div>
  </div>
</div>


<style></style>
