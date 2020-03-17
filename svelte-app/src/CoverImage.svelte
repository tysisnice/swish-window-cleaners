

<script>
  import { onMount } from 'svelte';

  export let image = '';
  export let title = '';
  export let text = '';
  export let button = '';
  export let small = false;

  onMount(() => {
    setTimeout(() => {
      image = image.replace('low', 'high');
    }, 10)
  })

  function handler() {
    window.scrollTo(0,document.body.scrollHeight);
  }
</script>


<div style="background: url('{image}')" {small} class="cover-image">
  <div class="inlet" {small}>
    <h2>{title}</h2>
    <p>{text}</p>
    {#if button !== ''}
      <div on:click={handler} class="quote-button">{button}</div>
    {/if}
  </div>
</div>

<style>
  .cover-image {
    height: 70vh;
    width: 100%;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center !important;
    position: relative;
    transition: 0.1s;
  }

  .cover-image[small="true"] {
    height: 300px;
  }

  .inlet {
    text-align: left;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(10,10,10,0.4);
    text-align: left;
    padding: 17% 0 0 6%;
  }
  .inlet > h2 {
    text-align: left;
    color: #eee;
    font-size: 30px;
  }
  .inlet > p {
    text-align: left;
    color: #ddd;
    font-size: 20px;
    color: white;
  }

  .inlet[small="true"] {
    background: rgba(10,10,10,0.7);
    padding: 100px 0 0 8%;
  }
  .inlet[small="true"] > h2 {
    color: #eee;
    font-size: 40px;
  }
</style>