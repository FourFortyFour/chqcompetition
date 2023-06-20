<script>
    import { planData } from "../store";
    import ListView from "./ListView.svelte";
</script>

<!-- <h2>Learning Outcomes</h2> -->
<main class="los">
    <section>
        <h4>Knowledge</h4>
        <ListView itemList={$planData["knowledge"]}></ListView>
    </section>
    <section>
        <h4>Skills</h4>
        <ListView itemList={$planData["skills"]}></ListView>
    </section>
    <section>
        <h4>Understanding</h4>
        <ListView itemList={$planData["understandings"]}></ListView>
    </section>
</main>

<style>
    h4 {
        text-align: center;
    }
    .los {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        margin: 2% 0;
    }

    section {  
        border: 1px solid black;
        padding: 10px;
        border-radius: 10px;
    }
</style>