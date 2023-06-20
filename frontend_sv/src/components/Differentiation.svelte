<script>
    import { planData } from "../store";
    import ListView from "./ListView.svelte";
</script>


<main class="diff-grid">
    <section>
        <ListView title={"Help"} itemList={$planData["differentiation"]}></ListView>
    </section>
    <section>
        <ListView title={"Challenges"} itemList={$planData["additional"]}></ListView>
    </section>
</main>

<style>
    .diff-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
</style>


