<script>
  import { onMount } from "svelte";
    import { planData } from "../store";

    onMount(() => {
        console.log($planData);
    })
</script>

