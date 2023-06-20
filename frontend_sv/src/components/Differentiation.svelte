<script>
  import { planData } from "../store";
  import Challenges from "./Challenges.svelte";
  import Help from "./Help.svelte";
  import ListView from "./ListView.svelte";
  import { Icon, Styles } from "sveltestrap";

  let options = ["Dyslexia", "Photosensitive", "Limited Arm Movement"];

  let selectedOptions = [];

  let hard = false;
</script>

<Styles />
<main class="diff-grid">
    <Help></Help>
    <Challenges></Challenges>
</main>

<style>
  .diff-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

</style>
