
import { writable } from 'svelte/store';

export const store = writable({
  phone: '0429 897 460',
  email: 'swishwindowcleaner@gmail.com',
  location: 'Sunbury, VIC',
  facebook: '@SwishWindowCleaner',
  gallery: [],
  homeExamplePics: [
    { src: 'images/high-quality/pool-fence-1.jpg', text: 'Glass pool fence' },
    { src: 'images/high-quality/house-exterior-3.jpg', text: 'Home exterior' },
    { src: 'images/high-quality/house-exterior-1.jpg', text: 'Double story home' }
  ],
  homeCoverImage: 'images/high-quality/ollie-cleaning-3.jpg',
  gallery: [
    "pool-fence-3.jpg",
    "pool-fence-2.jpg",
    "pool-fence-1.jpg",
    "outside-window-3.jpg",
    "outside-window-2.jpg",
    //"ollie-cleaning-8.jpg",
    "ollie-cleaning-7.jpg",
    "house-exterior-4.jpg",
    "house-exterior-5.jpg",
    //"ollie-cleaning-6.jpg",
    //"ollie-cleaning-5.jpg",
    //"ollie-cleaning-4.jpg",
    //"ollie-cleaning-3.jpg",
    "ollie-cleaning-2.jpg",
    //"ollie-cleaning-1.jpg",
    "oliver.jpg",
    "inside-window-4.jpg",
    "inside-window-3.jpg",
    "inside-window-2.jpg",
    //"inside-window-1.jpg",
    "house-exterior-3.jpg",
    "house-exterior-2.jpg",
    "house-exterior-1.jpg",
    "double-story-6.jpg",
    //"double-story-5.jpg",
    "double-story-4.jpg",
    "double-story-3.jpg",
    //"double-story-2.jpg",
    "double-story-1.jpg"
  ]
})