<template>
  <div class="subpage">
    <van-form @submit="onSubmit">
      <h2 class="title">你好</h2>
      <h2>欢迎来到CoderShy的商城！</h2>
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
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      username: '',
      password: '',
    };
  },

  mounted() {},

  methods: {
      onSubmit(values) {
        //   console.log(values);
      this.$toast.success('注册成功');
      localStorage.setItem('user',`{"用户名":"${values['用户名']}","密码":"${values['密码']}"}`)
      setTimeout(() => {
          this.$router.replace({path:'/login'})
      }, 2000);
    },
  }
};
</script>

<style lang="scss" scoped>
.subpage{
  h2{
    padding-left: 30px;
    font-weight: 600;
    line-height: 50px;
  }
  .title{
    margin-top: 80px;;
  }
  .van-field{
    margin-top: 30px;
  }
}
</style>