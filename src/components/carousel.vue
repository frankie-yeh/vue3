<template>
  <div class="carousel-container">
    <img
      :src="slides[currentSlide]"
      :alt="`Slide ${currentSlide + 1}`"
      class="carousel-image"
    />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "car-ousel",
  setup() {
    const currentSlide = ref(0);
    const slides = [
      "../assets/images/audi-rs-green.jpg",
      "../assets/images/evo-white.jpg",
      "../assets/images/wrx-orange.jpg",
      "../assets/images/bmw-m3.jpg",
    ];
    let intervalId;

    // 啟動輪播定時器
    const startCarousel = () => {
      intervalId = setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % slides.length;
      }, 3000);
    };

    // 清除定時器
    const stopCarousel = () => {
      clearInterval(intervalId);
    };

    onMounted(() => {
      startCarousel();
    });

    onUnmounted(() => {
      stopCarousel();
    });

    return {
      currentSlide,
      slides,
    };
  },
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
