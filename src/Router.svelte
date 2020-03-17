
<script>
  import AboutPage from './AboutPage.svelte';
  import HomePage from './HomePage.svelte';
  import GalleryPage from './GalleryPage.svelte';
  import { router } from './router.js';

  
</script>

{#if ($router === '/' || $router === 'home')}
  <HomePage />
{:else if $router === 'about'}
  <AboutPage />
{:else if $router === 'gallery'}
  <GalleryPage />
{/if}

