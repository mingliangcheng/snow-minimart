<template>
  <view class="content">
    <view class="text-area">
      <text class="title">
        {{ title }}
      </text>
    </view>
    <van-button type="primary">提交</van-button>
    <van-icon name="chat-o" />
  </view>
</template>

<script setup lang="ts">
const title = ref('hello')
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: red;
}
</style>
