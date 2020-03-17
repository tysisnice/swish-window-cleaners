

<script>
  import CoverImage from './CoverImage.svelte';
  import ContactSection from './ContactSection.svelte';
  import { navigate } from './router.js';
</script>


<CoverImage 
  image="/images/high-quality/ollie-cleaning-8.jpg"
  title="About Us"
  small
/>

<section id="what-do-we-do" class="info-section">
  <img id="ghost-image" src="/images/high-quality/house-exterior-4.jpg" alt="home">
  <div>
    <h3>What do we do?</h3>
    <p>We clean windows! Residential, commercial, your personal home, business, store front, pool fence, shop signs, triple story buildings - if it's glass, we'll clean it!<br><br> Not only will we clean it, we'll make sure it shines like a diamond, and makes your place pop and stand out.</p>
    <div class="quote-button small" on:click={() => navigate('gallery')}>Check out our Gallery</div>
  </div>
</section>

<section id="where-are-we" class="info-section">
  <img src="/images/high-quality/small-map.jpeg" alt="ollie">
  <div>
    <h3>Where are we?</h3>
    <p>Based in Sunbury, VIC, we happily serve all North Western and Eastern suburbs up to Mt Macedon area.<br><br>We've served <strong>Sunbury, Gisborne, Craigieburn, Taylors Lakes, Riddels Creek,</strong> and depending on the job, we will travel anywhere</p>
  </div>
</section>

<section id="who-are-we" class="info-section">
  <img src="/images/high-quality/oliver.jpg" alt="ollie">
  <div>
    <h3>Who are we?</h3>
    <p>Swish is locally owned and operated by Oliver Brown, a professional window cleaner for over 4 years. Originally from Bendigo, now Ollie and his wife Hannah runs their own business in and around Sunbury area.<br><br> Oliver is known as a hard worker, pleasant and clear communicator, and easy to deal with.</p>
  </div>
</section>

<section id="reviews">
  <h3>Some of our happy customers</h3>
  <img src="/images/high-quality/review-1.jpeg" alt="nice review">
  <img src="/images/high-quality/review-2.jpeg" alt="nice review">
  <img src="/images/high-quality/review-3.jpeg" alt="nice review">
  <a href="https://www.facebook.com/SwishWindowCleaner/" >Click here to see all reviews at our Facebook page</a>
</section>

<ContactSection />


<style>

  section:nth-child(2n) {
    flex-direction: row-reverse;
	}

  .info-section > img {
    height: 300px;
    margin-top: 0;
    margin-bottom: 0;
  }

  #reviews {
    background: white;
    align-items: center;
  }
  #reviews > h3 {
    width: 90vw;
    margin-top: 0;
  }
  #reviews > img {
    height: auto;
    width: 600px;
    margin: 10px;
  }
  
  a {
    width: 98vw;
    margin-top: 10px;
  }

  @media(max-width: 700px) {
    #reviews > img {
      width: 95vw;
    }
    #ghost-image {
      display: none;
    }
  }

</style>

