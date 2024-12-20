<template>
  <div class="video-container">
    <video class="background-video" autoplay muted loop controls>
      <source src="../assets/videos/background-video.mp4" type="video/mp4" />
      您的瀏覽器不支援 video 標籤
    </video>
  </div>
</template>

<script>
export default {
  name: "bg-video-",
};
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 800px;
  overflow: hidden;
  margin: 20px 0;
  z-index: -1;
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  opacity: 0.5;
  object-fit: cover;
}
</style>
