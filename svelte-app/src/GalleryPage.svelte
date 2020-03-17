<script>
  import { onMount } from 'svelte';
  import CoverImage from './CoverImage.svelte';
  import ContactSection from './ContactSection.svelte';
  import { store } from './store.js';

  let pictures = $store.gallery.map(pic => {
    return `images/low-quality/${pic}`;
  })

  onMount(() => {
    setTimeout(() => {
      pictures = pictures.map((pic) => pic.replace('low', 'high'));
    }, 10)
  })
</script>

<CoverImage 
  image="images/high-quality/house-exterior-1.jpg"
  title="Gallery"
  small
/>

<h3>Some pictures of our work</h3>

<div class="container">
  {#each pictures as pic}
    <img src="{pic}" alt="{pic}">
  {/each}
</div>

<ContactSection />



<style>
  h3 {
    margin:0;
    padding: 60px 0 10px 0;
    background: #f1f1f1;
  }

  .container {
    column-count: 1;
    padding: 30px;
    background: #f1f1f1;
  }

  img {
    width: calc(100vw - 80px);
    margin: 14px 2px 14px 2px;
    box-sizing: border-box;
  }


  @media(min-width: 600px) {
    .container {
      column-count: 2;
    }
    img {
      width: calc(50vw - 60px);
    }
  }
  
  @media(min-width: 1000px) {
    .container {
      column-count: 3;
    }
    img {
      width: calc(33vw - 60px);
    }
  }

</style>