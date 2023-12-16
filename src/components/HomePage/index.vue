<script setup lang="ts">
// import { ref } from "vue";

// const count = ref(0);
</script>
<template>
  <div class="container">
    <div class="top-list">
      <div class="header-1">畅学</div>
      <div class="icon-list">
        <img alt="任务" src="https://placehold.co/40x40/orange/white/png" />
        <img alt="消息" src="https://placehold.co/40x40/green/white/png" />
      </div>
    </div>
    <div class="header-card-list">
      <div class="card">
        <div>本周学习时长</div>
        <div><span class="number">0</span>min</div>
      </div>
      <div class="card">
        <div>本周获得学分</div>
        <div><span class="number">0</span></div>
      </div>
      <div class="card">
        <div>本周获得奖学金</div>
        <div><span class="number">0</span></div>
      </div>
      <div class="card">
        <div>畅学卡剩余时间</div>
        <div>
          <span class="number">0</span>天
          <div>续卡 ></div>
        </div>
      </div>
    </div>
    <div class="carousel-banner">
      <div class="tab-container">
        <div class="tab checked">畅学上新</div>
        <div class="tab">正在学习</div>
        <div class="tab">热门活动</div>
        <div class="tab">奖学金商城</div>
      </div>
      <div class="carousel-container">
        <div class="card">
          <img
            class="banner"
            src="https://placehold.co/120x100/ff0011/white/png"
            alt=""
          />
          <div class="description">Best Jobs in America</div>
          <button>换一个</button>
        </div>
        <div class="card">
          <img
            class="banner"
            src="https://placehold.co/120x100/green/white/png"
            alt=""
          />
          <div class="description">Best Jobs in America</div>
          <button>换一个</button>
        </div>
      </div>
    </div>
    <div class="center-tab-container">
      <div class="tab">AI天天练</div>
      <div class="tab">轻课星球</div>
      <div class="tab">阅读精选</div>
      <div class="tab">视频好课</div>
    </div>
    <div class="center-list">
      <div>AI天天练</div>
      <div class="more">更多 ></div>
      <div class="card-list">
        <div class="card">
          <div class="tag">在学</div>
          <img class="banner" src="" alt="" />
          <div class="content">商务实景精选英选英语对商务实景精选</div>
          <div class="message">总学分10</div>
        </div>
      </div>
    </div>
    <div class="footer-list">
      <div class="header-4">最近更新</div>
      <div class="more">换一批</div>
      <div class="card-list">
        <div class="card-list">
          <div class="card">
            <img class="banner" src="" alt="" />
            <div class="content">商务实景精选英选英语对商务实景精选</div>
            <div class="message">总学分10</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 0.8rem;
  background-color: rgb(47, 25, 218);
  .top-list {
    color: #fff;
    display: flex;
    justify-content: space-between;
    .icon-list img {
      border-radius: 100rem;
    }
    .header-1 {
      font-weight: bolder;
      font-size: 1.2rem;
    }
  }
  .header-card-list {
    color: #fff;
    display: flex;
    border-radius: 0.6rem;
    padding: 0.1rem;
    overflow: hidden;
    .card {
      width: 5rem;
      height: 3rem;
      font-size: 0.4rem;
      background-color: rgba(255, 255, 255, 0.49);
    }
  }
  .carousel-banner {
    position: relative;
    color: #fff;

    .tab-container {
      position: absolute;
      display: flex;
      justify-content: space-around;
      .tab {
        font-size: 0.5rem;
        border-radius: 10px;
        padding: 0.2rem;
        &.checked {
          background-color: rgb(0, 128, 255);
        }
      }
    }
    .carousel-container {
      margin: auto;
      display: flex;
      height: 10.3rem;
      overflow: hidden;
      width: 12rem;
      .card {
        position: relative;
        .banner {
          width: 12rem;
          height: 10rem;
        }
        .description {
          bottom: 0.5rem;
          left: 0.2rem;
          font-size: 0.5rem;
          position: absolute;
        }
        button {
          font-size: 0.4rem;
          bottom: 0.5rem;
          right: 0.2rem;
          position: absolute;
          color: rgb(0, 128, 255);
        }
      }
    }
  }
}
</style>
