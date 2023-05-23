<script setup lang="ts">
  import { ref, Ref } from 'vue'
  import Feedback from '../components/Feedback/Feedback.vue'
  // import Footer from '../components/Footer/Footer.vue'
  import WOW from 'wow.js'
  const wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true // reset animation on end (default is true)
  })
  wow.init()
  const url = 'https://blog-img-data.oss-cn-shanghai.aliyuncs.com/image-home/'
  const skills = [
    { text: 'JavaScript', iconName: '#icon-js' },
    { text: 'TypeScript', iconName: '#icon-ts' },
    { text: 'Node.js', iconName: '#icon-Nodejs' },
    { text: 'HTML5', iconName: '#icon-html' },
    { text: 'Linux', iconName: '#icon-linux' },
    { text: 'Sass', iconName: '#icon-sass' },
    { text: 'nginx', iconName: '#icon-nginx' },
    { text: 'Vue', iconName: '#icon-Vue' },
    { text: '小程序', iconName: '#icon-xiaochengxu' },
    { text: 'webpack', iconName: '#icon-webpack' },
    { text: 'Mysql', iconName: '#icon-mysql' },
    { text: 'PHP', iconName: '#icon-php' },
    { text: 'Git', iconName: '#icon-github' },
    { text: '剪辑', iconName: '#icon-jianji' },
    { text: '摄影', iconName: '#icon-sheying' },
    { text: 'PS', iconName: '#icon-psd' }
  ]
  const images = [
    {
      herf: '',
      id: '10307900',
      url: 'https://blog-img-data.oss-cn-shanghai.aliyuncs.com/image-photography/image-list/%E6%B3%A1%E6%B3%A1/IMG_0374.jpg',
      text: '五彩斑斓 - 2022年11月21日',
      size: '',
      ranking: 1
    },
    {
      herf: '',
      id: '10307411',
      url: 'https://blog-img-data.oss-cn-shanghai.aliyuncs.com/image-photography/image-list/BW/IMG_6831.jpg',
      text: 'Bilibili World! - 2021年7月1日',
      size: '',
      ranking: 2
    },
    {
      herf: '',
      id: '10300102',
      url: 'https://blog-img-data.oss-cn-shanghai.aliyuncs.com/image-photography/image-list/%E6%A0%A1%E6%9C%8D/IMG_9746.jpg',
      text: '校服的美 - 2022年7月1日',
      size: '',
      ranking: 10
    }
  ]
  const likes = ['摄影', '编程', '跑步', '动漫']
  const projects = ['影评小程序', 'miniAprender', '菜谱App', '持续更新中...']
  const imgArr = [
    ['YP1.jpg', 'YP2.jpg', 'YP3.jpg', 'YP4.jpg'],
    ['mini1.jpg', 'mini2.jpg', 'mini3.jpg', 'mini4.jpg'],
    ['cp1.jpg', 'cp2.jpg', 'cp3.jpg', 'cp4.jpg']
  ]
  const notes = [
    {
      title: 'jest单元测试',
      description: '单元测试以及其意义 单个功能或接口，给定输入，得到输出。看输出是否符合要求...'
    },
    {
      title: 'koa2生成图像校验码',
      description:
        'koa2实现动态生成图像校验码（含vue3项目中使用方式） 前期准备 首先 我们需要在 koa2 项目中安装...'
    },
    {
      title: '项目配置ESLint',
      description:
        '配置ESLint npm i eslint -D npx eslint --init 你想如何使用ESLint? 您的项目使用什么类型的模块...'
    },
    {
      title: '数组内对象去重的方法',
      description:
        '数组内对象去重方法 arrDeWeighting(arr) { let obj = {}; let peon = arr.reduce((cur, next) ...'
    },
    {
      title: '多行文本溢出省略显示',
      description:
        '文本溢出我们经常用到的应该就是text-overflow:ellipsis了，相信大家也很熟悉，但是对于多行...'
    },
    {
      title: '为什么要使用redis',
      description: 'cookie AND session Session 和 Cookie 功能效果是差不多的，区别就是session 是...'
    }
  ]
  let projectsFlg = ref(0)
  let projectsImgs: Ref<string[]> = ref([...imgArr[0]])

  const changeProjectsTage = (index: number) => {
    if (index >= imgArr.length) return
    // 更改显示图片
    projectsImgs.value = [...imgArr[index]]
    // 更改选中项
    projectsFlg.value = index
  }
</script>
<template>
  <div class="collapse py-2" id="collapseTarget"> This is the toggle-able content! </div>
  <!-- <Welcome v-if="showWelcome"></Welcome> -->
  <div class="home-body">
    <!-- 自我介绍板块开始-->
    <section>
      <div class="introduction">
        <div class="text-body">
          <span class="welcome wow animate__animated animate__slideInUp"> 我是捡破烂的小z </span>
          <h5 class="wow animate__animated animate__slideInUp">
            你可以在<b>主页</b>对我进行大致的了解；
          </h5>
          <h5 class="wow animate__animated animate__slideInUp">
            你也可以去画廊，欣赏我拍摄的<b>照片</b>；
          </h5>
          <h5 class="wow animate__animated animate__slideInUp">
            你也可以去我的<b>笔记</b>库，跟我一起学习、进步；
          </h5>
          <h5 class="wow animate__animated animate__slideInUp">
            你也可以去欣赏我用来练习的小<b>demo</b>，那是一些很有趣的东西；
          </h5>
          <h5 class="wow animate__animated animate__slideInUp">
            想更加了解我？也许你需要一份我的<b>简历</b>，欢迎联系我！
          </h5>
        </div>
        <div class="showSomething">
          <svg class="gegga">
            <defs>
              <filter id="gegga">
                <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur"></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"
                  result="inreGegga"
                ></feColorMatrix>
                <feComposite in="SourceGraphic" in2="inreGegga" operator="atop"></feComposite>
              </filter>
            </defs>
          </svg>
          <svg class="snurra" width="200" height="200" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="linjarGradient">
                <stop class="stopp1" offset="0"></stop>
                <stop class="stopp2" offset="1"></stop>
              </linearGradient>
              <linearGradient
                id="gradient"
                y2="160"
                x2="160"
                y1="40"
                x1="40"
                gradientUnits="userSpaceOnUse"
                xlink:href="#linjarGradient"
              ></linearGradient>
            </defs>
            <path
              class="halvan"
              d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"
            ></path>
            <circle class="strecken" cx="100" cy="100" r="64"></circle>
          </svg>
          <svg class="skugga" width="200" height="200" viewBox="0 0 200 200">
            <path
              class="halvan"
              d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"
            ></path>
            <circle class="strecken" cx="100" cy="100" r="64"></circle>
          </svg>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1617344671">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path class="shape-fill" d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
        </svg>
      </div>
    </section>
    <!-- 自我介绍板块结束-->
    <!-- 掌握技能板块开始-->
    <section>
      <div class="skills">
        <div class="title-box">
          <span class="wow animate__animated animate__slideInUp">掌握的技能</span>
          <span class="wow animate__animated animate__slideInUp">
            在学习专业知识的同时，发展摄影爱好也成为了我的次要目标，因此在掌握专业技能的同时，也能汲取到图形处理的知识
          </span>
        </div>
        <div class="skill-body">
          <ul>
            <li
              class="skill-box wow animate__animated animate__slideInUp"
              v-for="item in skills"
              :key="item.text"
            >
              <svg class="icon">
                <use :xlink:href="item.iconName"></use>
              </svg>
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </div>
        <div class="custom-shape-divider-bottom-1617759839">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path class="shape-fill" d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"></path>
          </svg>
        </div>
      </div>
    </section>
    <!-- 掌握技能板块结束-->
    <!-- 兴趣爱好板块开始-->
    <section>
      <div class="myLike">
        <div class="title-box">
          <span class="wow animate__animated animate__slideInUp">兴趣爱好</span>
          <span class="wow animate__animated animate__slideInUp">
            提高时间利用和工作效率，给你全新的能量和激情，让你在接下来的活动中精力充沛，激发创新思维，兴趣爱好带来的好处无穷无尽
          </span>
        </div>
        <div class="like-body">
          <ul>
            <li
              class="like-box wow animate__animated animate__slideInUp"
              v-for="item in likes"
              :key="item"
            >
              <div class="text-box">
                <span>{{ item }}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="custom-shape-divider-bottom-1617681446">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              class="shape-fill"
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            ></path>
            <path
              class="shape-fill"
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            ></path>
            <path
              class="shape-fill"
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
    <!-- 兴趣爱好板块结束-->
    <!-- 项目展示板块开始-->
    <section>
      <div class="projects">
        <div class="title-box">
          <span class="wow animate__animated animate__slideInUp">项目Demo</span>
          <span class="wow animate__animated animate__slideInUp">
            抛开工作接触到的项目，个人也借鉴了其他许多大型项目进行练习，受益匪浅
          </span>
        </div>
        <div class="projects-box">
          <ul class="options-list wow animate__animated animate__slideInUp">
            <li
              v-for="(item, index) in projects"
              :key="item"
              :class="projectsFlg == index ? 'hover' : ''"
              @click="changeProjectsTage(index)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="img-box wow animate__animated animate__slideInUp">
          <img
            class="card-img-top"
            v-for="item in projectsImgs"
            :key="item"
            :src="url + item"
            alt="..."
          />
        </div>
        <div class="custom-shape-divider-bottom-1617759620">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path class="shape-fill" d="M1200 0L0 0 892.25 114.72 1200 0z"></path>
          </svg>
        </div>
      </div>
    </section>
    <!-- 项目展示板块结束-->
    <!-- 技术文档开始-->
    <section>
      <div class="notes">
        <div class="title-box">
          <span class="wow animate__animated animate__slideInUp">技术文档</span>
          <span class="wow animate__animated animate__slideInUp">
            学习中的新知识点，工作中遇到的问题，记下来，记下来，记下来
          </span>
        </div>
        <div class="notes-box">
          <div
            class="card wow animate__animated animate__slideInUp"
            style="width: 18rem"
            v-for="item in notes"
            :key="item.title"
          >
            <div class="card-body">
              <h4 class="card-title">{{ item.title }}</h4>
              <p class="card-text">
                {{ item.description }}
              </p>
              <router-link class="notes-btn btn btn-1" to="/notes">
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%"></rect>
                </svg>
                let's go
              </router-link>
            </div>
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1617779411">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              class="shape-fill"
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
    <!-- 技术文档结束-->
    <!-- 摄影作品展示开始-->
    <section>
      <div class="photography">
        <div class="title-box">
          <span class="wow animate__animated animate__slideInUp">摄影作品集</span>
          <span class="wow animate__animated animate__slideInUp">
            摄影对我的影响非常巨大，摄影让我认识了自己，认识了生活，认识了许多有意思的人
          </span>
        </div>
        <div class="photo-album-box">
          <div class="photo-album">
            <router-link
              v-for="item in images"
              :key="item.url"
              href="href"
              :class="['large', 'polaroid', `img${item.ranking}`]"
              to="/photos"
            >
              <div
                class="img"
                :style="{ backgroundImage: 'url(' + item.url + ')' }"
                alt="照片"
              ></div>
              {{ item.text }}
            </router-link>
          </div>
          <div class="custom-shape-divider-bottom-1617781801">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                class="shape-fill"
                d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
    <!-- 摄影作品展示结束-->
    <!-- 评分开始-->
    <section>
      <div class="demo">
        <div class="title-box">
          <span class="wow animate__animated animate__slideInUp"> 这个网站看起来怎么样？ </span>
          <span class="wow animate__animated animate__slideInUp">
            动动你的小手指，给我打个分吧！当然,我也会一直完善这个小东西...
          </span>
        </div>
      </div>
      <Feedback></Feedback>
    </section>
    <!-- 评分结束-->
    <!-- 页脚开始 -->
    <section>
      <footer class="footer">
        <a href="https://beian.miit.gov.cn">桂ICP备2021009358号-2</a>
        <span class="gongan">
          <img src="../assets/image/gongan.png" alt="公安备案标" />
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=45010702001972">
            桂公网安备 45010702001970号
          </a>
        </span>
      </footer>
    </section>
  </div>
</template>
<style lang="scss">
  @import '../assets/style/viewStyle/home.scss';
  .footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;

    a {
      color: rgb(162, 162, 162);
      height: 18px;
      font-size: 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s ease-in-out;
      text-decoration: none;
      &:hover {
        color: #85b0ff;
      }
    }

    .gongan {
      margin: 0 1rem;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        margin: 0 5px;
      }
    }
  }
</style>
