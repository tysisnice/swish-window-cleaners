
<script>
  import { store } from './store.js';
</script>


<section id="contact-us">
  <h3>Contact us for a free quote!</h3>
  <div>
    <p class="contact-text">
      <img src="images/icons/phone.png" alt="phone" class="icon">
      {$store.phone}
    </p>
    <p class="contact-text">
      <span><img src="images/icons/gmail.jpeg" alt="email" class="icon"></span>
      {$store.email}
    </p>
    <p class="contact-text">
      <img src="images/icons/facebook.png" alt="gps" class="icon">
      {$store.facebook}
    </p>
    <p class="contact-text">
      <img src="images/icons/gps.png" alt="gps" class="icon">
      {$store.location}
    </p>
  </div>
  <div style="display: none;"><p class="contact-message">We are based in Sunbury, and happily serving anyone in the surrounding areas, including Diggers Rest, Gisborne, and wherever!<br>Contact us for a free quote, no obligation</p></div>
</section>


<style>

  section {
    background: white;
  }
  h3 {
    width: 100vw;
    font-size: 30px;
    margin: 0;
  }
  div {
    width: 500px;
  }

  .contact-text {
		margin: 35px -10px 35px -10px;
    font-size: 22px;
    font-weight: bold;
		line-height: 24px;
	}
	.icon {
    height: 28px;
    margin-right: 6px;
		transform: translateY(6px);
  }

  .contact-message {
    font-size: 18px;
    line-height: 26px;
    padding: 0 40px 0 40px;
  }
</style>