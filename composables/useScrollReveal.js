import { ref, onMounted, onUnmounted } from 'vue';

export const useScrollReveal = () => {
  const element = ref(null);
  const isVisible = ref(false);

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        // Detener observación después de ser visible
        if (observer) {
          observer.unobserve(entry.target);
        }
      }
    });
  };

  let observer;

  const setupObserver = () => {
    const options = {
      root: null,
      rootMargin: '0px 0px -100px 0px', // Trigger 100px antes de llegar a la sección
      threshold: 0,
    };

    observer = new IntersectionObserver(observerCallback, options);

    if (element.value) {
      observer.observe(element.value);
    }
  };

  onMounted(() => {
    setTimeout(() => {
      setupObserver();
    }, 100);
  });

  onUnmounted(() => {
    if (observer && element.value) {
      observer.unobserve(element.value);
    }
  });

  return {
    element,
    isVisible,
  };
};
