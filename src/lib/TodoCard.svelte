<script>
let inputText = '';
let list = [
  { id: 1, isFinished: false, text: 'Do Washing' },
  { id: 2, isFinished: true, text: 'Do Dish' },
  { id: 3, isFinished: false, text: 'Do Cleaning' },
  { id: 4, isFinished: true, text: 'Learn Go' },
  { id: 5, isFinished: true, text: 'Learn Rust' },
];
// 'ALL' | 'FINISHED' | 'UNFINISHED'
let filter = 'ALL';

$: finishedTodos = list.filter(todo => todo.isFinished);
$: unfinishtedTodos = list.filter(todo => !todo.isFinished);
$: filteredTodos = (filter === 'FINISHED' ? finishedTodos : (filter === 'UNFINISHED' ? unfinishtedTodos : list));

const handleSubmit = () => {
  addTodo(inputText);
  inputText = ''
};

const addTodo = (text) => {
  const todo = {
    text,
    id: Date.now(),
    isFinished: false,
  };
  list = [ ...list, todo ];
};

const setFilter = (value) => {
  filter = value;
};

const toggleTodo = (todo, index) => {
  list = [
    ...list.slice(0, index),
    { ...todo, isFinished: !todo.isFinished },
    ...list.slice(index + 1),
  ];
};

const removeTodo = (todo, index) => {
  list = [
    ...list.slice(0, index),
    ...list.slice(index + 1),
  ];
};
</script>

<div class="card">
  <div class="card-header">
    <form class="d-flex" role="search" on:submit|preventDefault={handleSubmit}>
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
  </div>
  <ul class="list-group list-group-flush">
    {#each filteredTodos as todo, index}
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      <input
        class="form-check-input mt-0 me-2"
        type="checkbox"
        aria-label="..."
        checked={todo.isFinished}
        on:change={() => toggleTodo(todo, index)}
      />
      <p
        class="mb-0 me-auto {todo.isFinished ? 'text-decoration-line-through' : ''}"
      >{ todo.text }</p>
      <button
        class="btn btn-danger btn-sm"
        on:click={() => removeTodo(todo, index)}
      >Del</button>
    </li>
    {/each}
  </ul>
  <div class="card-footer">
    <div class="btn-group" role="group" aria-label="Basic outlined example">
      <button
        type="button"
        class="btn btn-outline-primary"
        class:active={filter === 'ALL'}
        on:click={() => setFilter('ALL')}
      >All</button>
      <button
        type="button"
        class="btn btn-outline-primary"
        class:active={filter === 'FINISHED'}
        on:click={() => setFilter('FINISHED')}
      >Finished</button>
      <button
        type="button"
        class="btn btn-outline-primary"
        class:active={filter === 'UNFINISHED'}
        on:click={() => setFilter('UNFINISHED')}
      >Unfinished</button>
    </div>
  </div>
</div>
