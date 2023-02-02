<template>
  <div class="botton-box" v-if="isLoginFlg">
    <button type="button" class="btn btn-primary" @click="crawlingData">爬取内容</button>
    <button type="button" class="btn btn-secondary" @click="showData">显示内容</button>
    <button type="button" class="btn btn-success" @click="logout">退出登录</button>
  </div>
  <!-- Modal -->
  <el-dialog v-model="dialogVisible" title="提示" width="30%" :before-close="handleClose">
    <span>检测到您还未登陆，请先登陆！！</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="leave('/')">返回首页</el-button>
        <el-button type="primary" @click="leave('/login')"> 前往登陆 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  import { ElNotification } from 'element-plus'
  const router = useRouter()
  const isLoginFlg = ref(false)

  const dialogVisible = ref(false)
  const handleClose = () => {
    leave('/')
  }

  const isLogin = () => {
    axios.get('/reptile/isLogin').then((res) => {
      isLoginFlg.value = res.data?.data
      dialogVisible.value = !res.data?.data
    })
  }
  isLogin()

  const leave = (path: string) => {
    dialogVisible.value = false
    router.push({
      path
    })
  }

  const crawlingData = () => {
    axios.get('/reptile/getNoteList').then((res) => {
      ElNotification({
        title: 'Success',
        message: res.data?.msg,
        type: 'success'
      })
    })
  }

  const showData = () => {
    axios.get('/reptile/showNoteList').then((res) => {
      ElNotification({
        title: 'Success',
        message: res.data?.msg,
        type: 'success'
      })
      console.log('res :>> ', res.data)
    })
  }

  const logout = () => {
    axios.get('/reptile/logout').then((res) => {
      ElNotification({
        title: 'Success',
        message: `${res.data?.msg} 正在跳转...`,
        type: 'success'
      })
      setTimeout(() => {
        router.push({
          path: '/login'
        })
      }, 1500)
    })
  }
</script>

<style lang="scss" scoped>
  .botton-box {
    width: 400px;
    padding: 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .my-modal {
    display: block;
    margin-top: 70px;
  }
</style>
