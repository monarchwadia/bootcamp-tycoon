<script lang="ts">
  export let onclick: svelte.JSX.MouseEventHandler<HTMLButtonElement>;
</script>

<button on:click={onclick}>
  <slot></slot>
</button>

<style scoped>
  button {
    padding: 10px;
    background-color: darkgreen;
    color: white;
    border: 2px solid green;
    border-radius: 5px;
  }
</style>