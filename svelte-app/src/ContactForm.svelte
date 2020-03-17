
<script>
  let email, name, message, failed = false, sent = false;

  function sendMail() {
    var template_params = {
      "email": email,
      "name": name,
      "message": message
    }

    var service_id = "default_service";
    var template_id = "window_cleaning_job_interest";
    if (email && name && message && !sent) {
      emailjs.send(service_id, template_id, template_params);
      sent = true;
      setTimeout(() => {sent = false}, 3000);
    } else {
      failed = true;
      setTimeout(() => {failed = false}, 3000);
    }
  }
</script>

<div>
  <form action="javascript:sendMail()">
    <label>Send us a quick message</label>
    <label for="name">Full name</label>
    <input type="text" bind:value={name} name="name" placeholder="Your full name">
    <label for="email">Email</label>
    <input type="text" bind:value={email} name="email" placeholder="Your email address">
    <label for="message">Message</label>
    <textarea type="text" bind:value={message} name="message" placeholder="Your message"></textarea>
    <div class="quote-button" on:click={sendMail}>Submit</div>
  </form>
  {#if sent}
    <p class="success">Nice! your message has been passed along. We'll get back to you soon</p>
  {:else if failed}
    <p class="failed">Your message didn't send, make sure all the fields are filled out</p>
  {/if}
  </div>


<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: var(--primary-color);
    padding: 20px;
    color: white;
  }
</style>