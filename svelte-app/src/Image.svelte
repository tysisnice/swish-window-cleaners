<script>

import { onMount } from 'svelte';

  export let src = '';
  export let HDsrc = '';
  export let alt;

  const images = '/images/';
  const lowQuality = 'low-quality/';
  const highQuality = 'high-quality/';

  let source = HDsrc ? src : images + lowQuality + src;

  onMount(() => {
    source = HDsrc || images + highQuality + src;
  })

</script>

<img {...$$props} src="{source}" alt="{alt || src}"/>