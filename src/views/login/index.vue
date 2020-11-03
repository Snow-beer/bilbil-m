<template>
  <div>
    <van-cell-group class="top">
      <span>注册bilbil</span>
    </van-cell-group>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block color='pink' type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "loginIndex",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style coped lang='less'>
.top {
  height: 45px;
  background-color: pink;
  span {
    display: flex;
    flex: 1;
    justify-content: center;

    font-size: 4.267vw;
    line-height: 45px;
  }
}
</style>