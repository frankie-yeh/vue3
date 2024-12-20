<template>
  <div
    class="about-us"
    :style="{ maxWidth: '100%', margin: '0 auto', padding: '2em 6em' }"
  >
    <div class="flex-container" :style="flexContainerStyle">
      <!-- 左側區域 -->
      <div class="left-section" :style="sectionStyle">
        <h2 class="heading">關於我</h2>
        <img
          src="@/assets/images/subaru-logo.png"
          alt="Subaru Logo"
          :style="{ width: '100px', margin: '1em 0' }"
        />
        <p class="text">葉汶姍</p>

        <h2 class="sub-heading">學歷</h2>
        <p class="text">北市康寧護理專校 | 資訊管理科 二專畢業</p>
      </div>

      <!-- 右側區域 -->
      <div class="right-section" :style="sectionStyle">
        <h2 class="heading">經歷</h2>
        <p class="text">智寶數位行銷有限公司 12年工作經歷</p>
        <p class="text">職位：網頁工程師</p>

        <h2 class="sub-heading">前端技術</h2>
        <ul>
          <li v-for="(tech, index) in frontendSkills" :key="index" class="text">
            {{ tech }}
          </li>
        </ul>

        <h2 class="sub-heading">專案作品</h2>
        <p class="text">555</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      frontendSkills: [
        "精通HTML、CSS、JavaScript、RWD（響應式網站）開發能力",
        "WordPress開發和PHP、ASP網頁修改能力",
        "React.js開發和Git控版能力",
      ],
      flexContainerStyle: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingBottom: "1em",
      },
      sectionStyle: {
        width: "48%",
        textAlign: "left",
      },
    };
  },
};
</script>

<style scoped>
.about-us {
  color: #2a4365; /* 深藍色文字 */
}

.heading {
  font-size: 1.5rem;
  color: #2b6cb0;
}

.sub-heading {
  margin-top: 1em;
  font-size: 1.2rem;
  color: #2b6cb0;
}

.text {
  font-size: 1rem;
  color: #2c5282;
  margin: 0.5em 0;
}

ul {
  list-style-type: disc;
  padding-left: 1.5em;
}
</style>
