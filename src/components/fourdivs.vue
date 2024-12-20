<template>
    <div class="four-divs">
      <div class="car-container">
        <div
          v-for="(car, index) in carData"
          :key="index"
          class="car-box"
        >
          <!-- 車輛圖片 -->
          <img
            :src="car.image"
            :alt="`${car.name} logo`"
            class="car-image"
          />
  
          <!-- 車輛標題 -->
          <h2 class="car-title">
            {{ car.name }}
          </h2>
  
          <!-- 車輛描述 -->
          <p class="car-description">
            {{ car.description }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FourDivs',
    data() {
      return {
        carData: [
          {
            image: '/assets/images/auid-logo.png',
            name: 'Audi RS5',
            description:
              '搭載2.9升V6缸內直噴雙渦輪增壓引擎，可輸出450hp的最大馬力及61.2kgm的最大扭力，進階跑車化懸吊系統及動態駕馭控制系統(DRC)及quattro智慧型恆時四輪傳動系統。',
          },
          {
            image: '../assets/images/bmw-logo.png',
            name: 'BMW M3',
            description:
              '不僅擁有百公里四秒台的加速實力，更具備允文允武的多元動力特質。代號B58的直列六缸渦輪引擎最大馬力達374hp，51.0kgm峰值扭力更可在1850rpm就全數釋放。',
          },
          {
            image: '../assets/images/subaru-logo.png',
            name: 'Subaru WRX',
            description:
              '2.0升直噴渦輪增壓水平對臥引擎，最大可輸出268匹馬力，變速系統則有6速手排，搭配上對稱式全時四輪傳動、可變扭力分配、以及強化版車身動態穩定系統。',
          },
          {
            image: '../assets/images/mitsubishi-logo.png',
            name: 'Mitsubishi Evolution',
            description:
              '採用新世代4B11 2.0 MIVEC反置式鋁合金引擎，搭配鈦合金渦輪增壓系統，可輸出295匹最大動力輸出，高性能轎車。',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .four-divs {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  
  .car-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }
  
  .car-box {
    width: 100%;
    max-width: 23%;
    text-align: center;
    padding: 20px;
    margin: 10px 0;
    box-sizing: border-box;
  }
  
  @media (max-width: 768px) {
    .car-box {
      max-width: 48%;
    }
  }
  
  @media (max-width: 480px) {
    .car-box {
      max-width: 100%;
    }
  }
  
  .car-image {
    width: 100px;
    height: auto;
    margin: 0 auto;
  }
  
  .car-title {
    color: #3182ce;
    margin: 10px 0;
  }