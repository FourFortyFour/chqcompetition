<script>
    import { Icon, Styles } from "sveltestrap";
    export let handleClick;
</script>

<Styles></Styles>
<button class="regen" on:click={handleClick}><Icon name="arrow-repeat"></Icon></button>

<style>
    .regen {
    border-radius: 100%;
    border: none;
    color: greenyellow;
    background-color: black;
  }
  .regen:hover {
    border-radius: 100%;
    border: none;
    color: rgb(109, 181, 0);
    background-color: rgb(32, 32, 32);
  }
</style>

