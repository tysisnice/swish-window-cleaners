

<script>
  import {onMount} from 'svelte';
  import ImageSlider from './ImageSlider.svelte';
  import ContactSection from './ContactSection.svelte';
  import CoverImage from './CoverImage.svelte';

  import { store } from './store.js';
  import { navigate } from './router.js';

  $: examples = $store.homeExamplePics;
</script>


<CoverImage 
  image={$store.homeCoverImage} 
  title="Expert Window Cleaners"
  text="Attention to detail cleaning"
  button="Book a free Quote" 
/>

<section id="icon-cards">
  <div class="icon-card">
    <img src="images/icons/residential.png" alt="house">
    <h4>Residential</h4>
    <p>Thorough home window cleans, make your house shine for visitors</p>
  </div>
  <div class="icon-card">
    <img src="images/icons/commercial.png" alt="shop">
    <h4>Commercial</h4>
    <p>Shop fronts, signs, office buildings. Give your business a nice, inviting, clean look</p>
  </div>
  <div class="icon-card">
    <img src="images/icons/window-shine.png" alt="infinite">
    <h4>Everything</h4>
    <p>Pool fences, mirrors, builders cleans, whatever! If its glass, we'll make it shine</p>
  </div>
</section>

<section id="why-us" class="info-section">
  <img src="images/high-quality/ollie-cleaning-6.jpg" alt="detail work">
  <div>
    <h3>Why Swish? Attention to detail</h3>
    <p>We are absolutely commited to detail and customer satisfaction, with a high standard of quality that ensures your windows will be cleaner than ever. <br><br>Often described as perfectionists, we take extra time and measures to make sure your windows are spotless.</p>
    <div on:click={() => navigate('about')} class="quote-button">More about us and what we do</div>
  </div>
</section>

<section id="examples">
  <h3>Examples</h3>
  <ImageSlider details={examples} />
  <h4>Like what you see?</h4>
  <div on:click={() => navigate('gallery')} class="quote-button">Check out our gallery</div>
</section>

<ContactSection />


<style>
  p {
   color: #333;
   font-size: 18px; 
   line-height: 24px;
  }

  .icon-card {
    text-align: center;
    min-width: 200px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .icon-card > img {
    width: 100px;
    height: 100px;
  }
  .icon-card > p {
    font-size: 18px;
    line-height: 24px;
  }

  #examples {
    padding: 10px;
  }
  #examples > h3 {
    padding-bottom: 10px;
  }
  #examples > .quote-button {
    margin: 30px 40px 30px 40px;
  }
  #examples > h4 {
    margin-top: 20px;
  }

</style>

