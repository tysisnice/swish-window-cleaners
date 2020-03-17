
import { writable } from 'svelte/store';


let path = window.location.pathname.split('/').join('');
path = path || '/';

export const router = writable(path);

export const navigate = (link) => {
  router.set(link);
  window.history.pushState(null, null, link);
  document.documentElement.scrollTop = 0;
}

window.addEventListener('popstate', () => {
  let path = window.location.pathname.split('/').join('');
  path = path || '/';
  router.set(path);
  document.documentElement.scrollTop = 0;
})