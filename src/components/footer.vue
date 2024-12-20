<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Logo 區域 -->
      <div class="footer-section">
        <img
          src="../assets/images/footer-car-logo.png"
          alt="Logo"
          class="footer-logo"
        />
      </div>

      <!-- Google Map 區域 -->
      <div class="footer-section">
        <div class="aspect-ratio">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092883!2d144.95373631531882!3d-37.81627917975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727d1a5f9d1c6d!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1630648041925!5m2!1sen!2sus"
            allowfullscreen
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>

      <!-- 聯絡資訊 區域 -->
      <div class="footer-section contact-info">
        <h2>Contact</h2>
        <p>Phone / +80 999 99 9999</p>
        <p>Email / info@domain.com</p>
        <p>Studio / Moonshine St. 14/05 Light City</p>
        <p class="footer-copyright">Copyright 2024 - Vue Designed by Frankie</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style scoped>
.footer {
  background-color: #fff;
  border-top: 1px solid #e2e8f0;
  padding: 20px 10px;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .footer-container {
    flex-direction: row;
  }
}

.footer-section {
  flex: 1;
  text-align: center;
  margin-bottom: 20px;
}

.footer-logo {
  max-width: 100px;
  margin: 0 auto;
}

.aspect-ratio {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.aspect-ratio iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.contact-info h2 {
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.contact-info p {
  margin: 5px 0;
  color: #333;
}

.footer-copyright {
  font-size: 0.875rem;
  color: #718096;
}
</style>
