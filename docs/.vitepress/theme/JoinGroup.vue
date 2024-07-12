<script setup>
const props = defineProps({
  showImg: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="join-group" data-pagefind-ignore="all">
    <template v-if="!showImg">
      <details>
        <summary>🎉 <span>欢迎加入交流群，查看二维码</span></summary>
        <div class="scan-card-list">
          <div class="scan-card">
            <img src="https://www.redou.vip/nprox-doc/assets/qq.jpg" alt="QQ交流">
            <span>
              QQ交流
            </span>
          </div>
          <div class="scan-card">
            <img src="https://www.redou.vip/nprox-doc/assets/wx-high.jpg" alt="微信">
            <span>微信交流</span>
          </div>
        </div>
        <p>加好友请备注“nProX”</p>
      </details>
    </template>
    <template v-else>
      <p>
        🎉 欢迎扫码加入交流群
      </p>
      <div v-if="showImg" class="scan-card-list">
        <div class="scan-card">
          <img src="https://www.redou.vip/nprox-doc/assets/qq.jpg" alt="QQ交流">
          <span>
            QQ交流
          </span>
        </div>
        <div class="scan-card">
          <img src="https://www.redou.vip/nprox-doc/assets/wx-high.jpg" alt="微信">
          <span>微信交流</span>
        </div>
      </div>
      <p>加好友请备注“nProX”</p>
    </template>
  </div>
</template>

<style scoped lang="scss">
.join-group {
  text-align: center;

  img {
    max-width: 200px;
    display: inline-block;
    cursor: pointer;
  }

  p {
    padding: 16px 0;
  }

  a,summary>span {
    background: linear-gradient(90deg, #58e3f5, #dabcfc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 4px;
    border-bottom: 1px dashed #58e3f5;
    font-weight: bolder;
  }
}
.scan-card-list {
  display: flex;
  align-items: center;
  justify-content: center;
  .scan-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 16px;
    img {
      height: 200px;
      border-radius: 8px;
    }
    span {
      margin-top: 8px;
      font-size: 16px;
      font-weight: bold;
    }
  }
}
details,summary{
  padding-bottom: 10px;
}
</style>
