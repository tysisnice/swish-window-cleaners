

<script>
  import { onMount } from 'svelte';

  export let details = [
    { src: 'images/high-quality/house-exterior-3.jpg', title: 'Residential', text: 'asdkfjasf' },
    { src: 'images/high-quality/house-exterior-1.jpg', title: 'Commercial', text: 'oh my' },
    { src: 'images/high-quality/house-exterior-2.jpg', title: 'Industrial', text: 'butt' }
  ];

  $: entry = details[0];
  var cycle = setInterval(swap, 4000);
  var goAgain = true;

  function swap(reverse) {
    if (!goAgain) {
      return;
    }
    !reverse 
      ? details.push(details.shift())
      : details.unshift(details.pop());
    details[0] = details[0];
    goAgain = false;
    setTimeout(() => {goAgain = true}, 500);
  }

  function manualCycle(reverse) {
    swap(reverse);
    clearInterval(cycle);
    cycle = setInterval(swap, 4000);
  }

  onMount(() => {
    return () => clearInterval(cycle);
  });

  setTimeout(() => {
    details.forEach(({src}) => {
      const image = new Image();
      image.src = src;
    })
  }, 100);

</script>

<div style="background: url('{entry.src}');" class="container">
  <div class="text-box">
    <h3>{entry.text}</h3>
  </div>
  <div class="button left" on:click={() => manualCycle(true)}>
    <i class="left"></i>
  </div>
  <div class="button right" on:click={() => manualCycle(false)}>
    <i class="right"></i>
  </div>
</div>


<style>
  .container {
    width: 100%;
    min-height: 72vh;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center center !important;
    transition: 0.5s;
    position: relative;
    overflow: hidden;
  }

  .text-box {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: rgba(0,0,0,0.6);
  }
  h3 {
    color: white;
    font-size: 26px;
    position: relative;
    margin: 12px;
  }


  .button {
    cursor: pointer;
    transition: 0.3s;
    background: black;
    opacity: 0.5;
    height: 40px; width: 40px;
    border-radius: 50%;
    top: 45%;
    position: absolute;
    line-height: 42px;
    margin: 10px;
  }
  .button:hover {
    opacity: 1;
  }
  .button.left {
    left: 0;
  }
  .button.right {
    right: 0;
  }

  i {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    height: 4px;
    width: 4px;
  }

  i.left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }

  i.right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    margin-right: 4px;
  }
</style>