<script>
  import { planData } from "../store";
  import ListView from "./ListView.svelte";
  import { Icon, Styles } from "sveltestrap";

  let options = [
    'Dyslexia',
    'Photosensitive',
    'Limited Arm Movement',
  ]

  let selectedOptions = [];

  let hard = false;

</script>

<Styles></Styles>
<main class="diff-grid">
  <section class="help">
    <ListView title={"Help"} itemList={$planData["differentiation"]} />
    <hr>
    <div class="options-help">
      {#each options as option}
        <label >
            <input type="checkbox" bind:group={selectedOptions} name="help-options" value={option}>
            {option}
        </label>        
      {/each}
    </div>
  </section>
  <section>
    <ListView title={"Challenges"} itemList={$planData["additional"]} />
    <hr>
    <div class="challenge-help">
        <label >
            <input type="radio" name="challenge" id="" bind:group={hard} value={false}>
            Easier
        </label>
        <button class="regen"><Icon name="arrow-repeat"></Icon></button>
        <label >
            <input type="radio" name="challenge" id="" bind:group={hard} value={true}>
            Harder
        </label>
    </div>
  </section>
</main>

<style>
  .diff-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .help {
    display: flex;
    flex-direction: column;
  }

  .options-help {
    display: flex;
    justify-content: space-around;
  }

  .challenge-help {
    padding: 0 3%;
    display: flex;
    justify-content: space-around;
  }

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

  section {
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
  }
</style>
