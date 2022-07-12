<script>
// import { ref, reactive } from 'vue';

let text = '';
const todos = {
  list: [
    { id: 1, isFinished: false, text: 'Do Washing' },
    { id: 2, isFinished: true, text: 'Do Dish' },
    { id: 3, isFinished: false, text: 'Do Cleaning' },
    { id: 4, isFinished: true, text: 'Learn Go' },
    { id: 5, isFinished: true, text: 'Learn Rust' },
  ],
  // 'ALL' | 'FINISHED' | 'UNFINISHED'
  filter: 'ALL',
};

const handleInput = (e) => {
  text = e.target.value;
};

const finishedTodos = () => {
  return todos.list.filter(todo => todo.isFinished);
};

const unfinishedTodos = () => {
  return todos.list.filter(todo => !todo.isFinished);
};

const filteredTodos = () => {
  const { filter, list } = todos;
  if (filter === 'FINISHED') {
    return finishedTodos();
  } else if (filter === 'UNFINISHED') {
    return unfinishedTodos();
  }
  return list;
};

$: filtered = filteredTodos();

const addTodo = () => {
  const { list } = todos;
  list.push({ text, id: Date.now(), isFinished: false });
  text = '';
};

const setFilter = (filter) => {
  todos.filter = filter;
};

const toggleTodo = (id) => {
  const { list } = todos;
  const index = list.findIndex(todo => todo.id === id);
  const todo = list[index];
  todos.list = [
    ...list.slice(0, index),
    {
      ...todo,
      isFinished: !todo.isFinished,
    },
    ...list.slice(index + 1),
  ];
};

const removeTodo = (id) => {
  const { list } = todos;
  const index = list.findIndex(todo => todo.id === id);
  todos.list = [
    ...list.slice(0, index),
    ...list.slice(index + 1),
  ];
};
</script>

<div class="card">
  <div class="card-header">
    <form class="d-flex" role="search" on:submit|preventDefault={addTodo}>
      <input
        class="form-control me-2"
        type="search"
        placeholder="enter todo"
        aria-label="Enter todo"
        value={text}
        on:input={handleInput}
      />
      <button
        class="btn btn-outline-success"
        type="submit"
      >Add</button>
    </form>
  </div>
  <ul class="list-group list-group-flush">
    {#each item as filtered}
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      <input
        class="form-check-input mt-0 me-2"
        type="checkbox"
        aria-label="..."
        bind:checked={item.isFinished}
        on:change={toggleTodo(item.id)}
      />
      <p
        class="mb-0 me-auto"
        class:={isFinished ? 'text-decoration-line-through' : ''}
      >{ item.text }</p>
      <button
        class="btn btn-danger btn-sm"
        @click="removeTodo(id)"
      >Del</button>
    </li>
  </ul>
  <div class="card-footer">
    <div class="btn-group" role="group" aria-label="Basic outlined example">
      <button
        type="button"
        class="btn btn-outline-primary"
        :class="{active: todos.filter === 'ALL'}"
        @click="setFilter('ALL')"
      >All</button>
      <button
        type="button"
        class="btn btn-outline-primary"
        :class="{active: todos.filter === 'FINISHED'}"
        @click="setFilter('FINISHED')"
      >Finished</button>
      <button
        type="button"
        class="btn btn-outline-primary"
        :class="{active: todos.filter === 'UNFINISHED'}"
        @click="setFilter('UNFINISHED')"
      >Unfinished</button>
    </div>
  </div>
</div>
