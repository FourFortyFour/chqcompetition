<script>
    import { planData } from "../store";
</script>

<h2>Educator</h2>
<main class="edu-grid">
    <section>
        {$planData["assessment"]}
    </section>
    <section>
        {$planData["reflect"]}
    </section>
</main>

<style>
    h2 {
        text-align: center;
    }
    .edu-grid {
        margin: 30px 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .edu-grid > * {
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
    }
</style>