<template>
  <div class="phone-model">
    <div class="box">
      <iframe scrolling="auto" frameborder="0" :src="src" seamless></iframe>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.phone-model {
    font-size: 16px;
    background-color: #fff;
    width: 330px;
    position: fixed;
    right: 16px;
    bottom: 12px;
    z-index: 12;
    margin: 0;
    overflow: hidden;
    box-sizing: border-box;
    overflow-y: auto;
    background-image: url(./assets/iPhoneX-model.png);
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 30px;
    padding: 48px 18px 38px 16px;
}
.box {
    width: 296px;
    height: 590px;
    overflow: hidden;
}
iframe {
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  width: 296px;
  height: 590px;
  border: none;
}
</style>
