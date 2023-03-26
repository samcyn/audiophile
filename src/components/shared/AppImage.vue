<script setup lang="ts">
import { Directive, defineProps, withDefaults, ImgHTMLAttributes } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppImageProps extends ImgHTMLAttributes {
  src?: string;
  alt?: string;
}
type P = HTMLInputElement;
// set defaults props
withDefaults(defineProps<AppImageProps>(), {
  alt: 'AppImage',
  src: '',
});

const vLazy: Directive<P> = {
  mounted: (el) => {
    const loadImage = () => {
      el.addEventListener('load', () => {
        setTimeout(() => el.classList.add('loaded'), 100);
      });
      el.addEventListener('error', (event) => console.log('error', event));
      el.src = el.dataset.url || '';
    };

    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    };

    const createObserver = () => {
      const options: IntersectionObserverInit = {
        root: null,
        threshold: 0,
      };

      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    };

    if (window['IntersectionObserver']) {
      createObserver();
    } else {
      loadImage();
    }
  },
};
</script>

<template>
  <img v-lazy :alt="alt" :data-url="src" />
</template>
