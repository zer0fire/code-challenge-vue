<script setup lang="ts">
// import { ref } from "vue";

// const count = ref(0);
</script>
<template>
  <div class="container">
    <div class="background">
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
            src="https://placehold.co/120x100/555555/white/png"
            alt=""
          />
          <div class="description">Best Jobs in America</div>
          <button>换一个</button>
        </div>
        <div class="card">
          <img
            class="banner"
            src="https://placehold.co/120x100/666666/white/png"
            alt=""
          />
          <div class="description">Best Jobs in America</div>
          <button>换一个</button>
        </div>
      </div>
    </div>
    <div class="center-tab-container">
      <div class="tab checked">AI天天练</div>
      <div class="tab">轻课星球</div>
      <div class="tab">阅读精选</div>
      <div class="tab">视频好课</div>
    </div>
    <div class="center-list">
      <div class="header">
        <div class="header-3">AI天天练</div>
        <div class="more">更多 ></div>
      </div>
      <div class="card-list">
        <div class="card">
          <div class="tag">在学</div>
          <img
            class="banner"
            src="https://placehold.co/250x170/666666/white/png"
            alt="banner"
          />
          <div class="content">商务实景精选英选英语对商务实景精选</div>
          <div class="message">总学分10</div>
        </div>
        <div class="card">
          <div class="tag">在学</div>
          <img
            class="banner"
            src="https://placehold.co/250x170/666666/white/png"
            alt="banner"
          />
          <div class="content">商务实景精选英选英语对商务实景精选</div>
          <div class="message">总学分10</div>
        </div>
        <div class="card">
          <div class="tag">在学</div>
          <img
            class="banner"
            src="https://placehold.co/250x170/666666/white/png"
            alt="banner"
          />
          <div class="content">商务实景精选英选英语对商务实景精选</div>
          <div class="message">总学分10</div>
        </div>
      </div>
    </div>
    <div class="footer-list">
      <div class="header">
        <div class="header-4">最近更新</div>
        <div class="more">换一批</div>
      </div>
      <div class="card-list">
        <div class="card">
          <img
            class="banner"
            src="https://placehold.co/170x100/666666/white/png"
            alt=""
          />
          <div class="content">商务实景精选英选英语对商务实景精选</div>
          <div class="message">总学分10</div>
        </div>
        <div class="card">
          <img
            class="banner"
            src="https://placehold.co/170x100/666666/white/png"
            alt=""
          />
          <div class="content">商务实景精选英选英语对商务实景精选</div>
          <div class="message">总学分10</div>
        </div>
        <div class="card">
          <img
            class="banner"
            src="https://placehold.co/170x100/666666/white/png"
            alt=""
          />
          <div class="content">商务实景精选英选英语对商务实景精选</div>
          <div class="message">总学分10</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 0.5rem;
  background-color: rgb(75, 138, 255);
  overflow: hidden;
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
    overflow: hidden;
    margin-bottom: 0.5rem;
    .card {
      // width: 5rem;
      flex-grow: 1;
      height: 2rem;
      padding: 0.2rem;
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
      z-index: 1;
      left: 50%;
      transform: translate(-50%, 0);
      width: 12rem;
      top: 0.2rem;
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
          border-radius: 0.5rem;
          overflow: hidden;
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
          border-radius: 3rem;
          padding: 0.1rem 0.5rem;
        }
      }
    }
  }
  .center-tab-container {
    margin: 1rem auto;
    display: flex;
    font-size: 0.6rem;
    box-shadow: 1px 1px 10px 1px black;
    padding: 0.2rem 0.3rem;
    justify-content: space-between;
    border-radius: 10rem;
    background-color: #fff;
    .tab {
      padding: 0.1rem;
      &.checked {
        color: rgb(0, 128, 255);
        background-color: rgb(233, 233, 233);
        border-radius: 10rem;
        box-shadow: inset 1px 1px 3px 0px black;
      }
    }
  }
  .center-list {
    margin-bottom: 1rem;
    .header {
      display: flex;
      justify-content: space-between;
      font-size: 0.7rem;
      .header-3 {
        font-weight: bolder;
      }
      .more {
        font-size: 0.5rem;
        color: #404040;
      }
    }
    .card-list {
      display: flex;
      margin: auto;
      width: 100rem;
      overflow: hidden;
      .card {
        position: relative;
        background-color: #fff;
        border-radius: 0.5rem;
        overflow: hidden;
        width: 8rem;
        margin-right: 1rem;
        .tag {
          position: absolute;
          top: 0;
          left: 0;
          font-size: 0.5rem;
          color: white;
          background-color: #1b91ff;
          padding: 0.1rem 0.2rem;
          border-radius: 0.2rem;
        }
        .content {
          font-size: 0.7rem;
          overflow: hidden;
          margin: 0.2rem 0.2rem 1rem 0.2rem;
        }
        .message {
          position: absolute;
          font-size: 0.5rem;
          right: 0.4rem;
          bottom: 0.2rem;
        }
      }
      .card:last-child {
        margin: 0;
      }
    }
  }
  .footer-list {
    .header {
      display: flex;
      justify-content: space-between;
      font-size: 0.6rem;
      .header-4 {
        font-weight: bolder;
      }
    }
    .card-list {
      display: flex;
      justify-content: space-between;
      // windows: 10rem;
      .card {
        position: relative;
        background-color: #fff;
        border-radius: 0.5rem;
        overflow: hidden;
        // width: 5.5rem;
        margin-right: 1rem;
        .tag {
          position: absolute;
          top: 0;
          left: 0;
          font-size: 0.5rem;
          color: white;
          background-color: #1b91ff;
          padding: 0.1rem 0.2rem;
          border-radius: 0.2rem;
        }
        .content {
          font-size: 0.5rem;
          overflow: hidden;
          margin: 0.2rem 0.2rem 1rem 0.2rem;
        }
        .message {
          position: absolute;
          font-size: 0.35rem;
          right: 0.4rem;
          bottom: 0.2rem;
        }
      }
      .card:last-child {
        margin: 0;
      }
    }
  }
}
</style>
