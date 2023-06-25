<script>
  import { text } from "svelte/internal";
  import { planData } from "../store";
  import { Carousel, CarouselIndicators, CarouselItem, Styles } from "sveltestrap";

  $: carItems = [
    $planData["prepare"],
    $planData["investigate"],
    $planData["apply"],
    $planData["connect"],
    $planData["evaluate"],
  ];
  let carousel;
  let activeIndex = 0;
</script>
<Styles />

<h2>Learning Experiences</h2>
<main class="carousel-holder">
  <Carousel ride={false} interval={false} dark items={carItems} bind:activeIndex>
    
    <div class="carousel-inner">

      {#each carItems as item, index}
        <CarouselItem bind:activeIndex itemIndex={index}>
          <section class="le">
            {item}
          </section>
        </CarouselItem>
      {/each}

    </div>
    <CarouselIndicators style="position: relative;" bind:activeIndex items={carItems}></CarouselIndicators>
  </Carousel>
</main>

<style>
  h2 {
    text-align: center;
    margin: 10px 0;
  }
  .carousel-holder {
    display: flex;
    margin: 20px 0;
    }

  section {
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
  }

</style>
