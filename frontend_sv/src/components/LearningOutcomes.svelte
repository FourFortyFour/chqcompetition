<script>
    import { planData } from "../store";
    import ListView from "./ListView.svelte";
</script>

<!-- <h2>Learning Outcomes</h2> -->
<main class="los">
    <section>
        <ListView title={"Knowledge"} itemList={$planData["knowledge"]}></ListView>
    </section>
    <section>
        <ListView title={"Skills"} itemList={$planData["skills"]}></ListView>
    </section>
    <section>
        <ListView title={"Understanding"} itemList={$planData["understandings"]}></ListView>
    </section>
</main>

<style>

    .los {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }

    section {
        height: 100%;
    }
</style>