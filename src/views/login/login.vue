<template>
  <div class="login-body">
    <div class="login-box">
      <h2>Login</h2>
      <form method="post" @submit.prevent="login">
        <div class="user-box">
          <input
            id="username"
            type="text"
            name="userName"
            v-model="loginInfo.userName"
            required="true"
          />
          <label for="username">Username</label>
        </div>
        <div class="user-box">
          <input
            id="password"
            type="password"
            name="passworld"
            v-model="loginInfo.password"
            required="true"
          />
          <label for="password">Password</label>
        </div>
        <button href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import qs from 'qs'
  import axios from 'axios'
  import { ElNotification } from 'element-plus'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const loginInfo = reactive({
    userName: '',
    password: ''
  })

  // 登陆
  const login = () => {
    axios
      .post(
        '/users/login',
        qs.stringify({
          password: loginInfo.password,
          userName: loginInfo.userName
        }),
        {
          headers: { ' Content-Type': 'application/x-www-form-urlencoded' }
        }
      )
      .then((res) => {
        console.log('res :>> ', res)
        if (res.status == 200) {
          ElNotification({
            title: 'Success',
            message: res.data?.msg,
            type: 'success'
          })
          setTimeout(() => {
            router.push({
              path: '/reptile'
            })
          }, 1000)
        } else {
          ElNotification({
            title: 'Error',
            message: res.data?.msg,
            type: 'error'
          })
        }
      })
  }
</script>

<style lang="scss" scoped>
  $linear-gradient-color-one: #141e30;
  $linear-gradient-color-two: #243b55;
  $height-light: #03e9f4;
  .login-body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: linear-gradient($linear-gradient-color-one, $linear-gradient-color-two);
    height: 100%;
  }
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;

    h2 {
      margin: 0 0 30px;
      padding: 0;
      color: #fff;
      text-align: center;
    }

    .user-box {
      position: relative;
      input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;

        &:focus ~ label,
        &:valid ~ label {
          top: -20px;
          left: 0;
          color: $height-light;
          font-size: 12px;
        }
      }
      label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: 0.5s;
      }
    }
    form {
      button {
        position: relative;
        display: inline-block;
        padding: 10px 20px;
        color: $height-light;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        transition: 0.5s;
        margin-top: 40px;
        letter-spacing: 4px;
        border: none;
        background: transparent;
        span {
          position: absolute;
          display: block;
        }
        span:nth-child(1) {
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, $height-light);
          animation: btn-anim1 1s linear infinite;
        }
        @keyframes btn-anim1 {
          0% {
            left: -100%;
          }
          50%,
          100% {
            left: 100%;
          }
        }
        span:nth-child(2) {
          top: -100%;
          right: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, transparent, $height-light);
          animation: btn-anim2 1s linear infinite;
          animation-delay: 0.25s;
        }
        @keyframes btn-anim2 {
          0% {
            top: -100%;
          }
          50%,
          100% {
            top: 100%;
          }
        }
        span:nth-child(3) {
          right: -100%;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(270deg, transparent, $height-light);
          animation: btn-anim3 1s linear infinite;
          animation-delay: 0.5s;
        }
        @keyframes btn-anim3 {
          0% {
            right: -100%;
          }
          50%,
          100% {
            right: 100%;
          }
        }
        span:nth-child(4) {
          bottom: -100%;
          left: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(360deg, transparent, $height-light);
          animation: btn-anim4 1s linear infinite;
          animation-delay: 0.75s;
        }

        @keyframes btn-anim4 {
          0% {
            bottom: -100%;
          }
          50%,
          100% {
            bottom: 100%;
          }
        }
      }
      button:hover {
        background: $height-light;
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 5px $height-light, 0 0 25px $height-light, 0 0 50px $height-light,
          0 0 100px $height-light;
      }
    }
  }
</style>
