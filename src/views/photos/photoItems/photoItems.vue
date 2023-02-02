<template>
  <div class="photo-box">
    <div class="swiper-box">
      <swiper
        :modules="modules"
        :loop="true"
        effect="fade"
        :slides-per-view="1"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, index) in itemData.images" :key="index">
          <div class="image-box">
            <img :src="item" alt="轮播图" />
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-list">
        <ul>
          <template v-for="(item, index) in itemData.images" :key="index">
            <li
              :class="[index == pickFlg ? 'pickItem' : '']"
              :style="{ backgroundImage: 'url(' + item + ')' }"
              @click="handleSlideTo(index)"
            >
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="photo-info">
      <div class="user-box">
        <img :src="itemData.photoMan.userImg" alt="用户头像" />
        <span>{{ itemData.photoMan.name }}</span>
      </div>
      <div class="inturn-box">
        <div class="love">
          <input type="checkbox" name="" id="btn" />
          <label class="btn-love" for="btn"></label>
        </div>
        <span class="love-number">{{ itemData.likeNum }}</span>
        <div class="download"></div>
      </div>
      <div class="description-box">
        <h5 class="description-title">{{ itemData.introduction.name }} 系列</h5>
        <span>
          {{ itemData.introduction.description }}
        </span>
      </div>
      <div class="detail">
        <h6>详情</h6>
      </div>
      <div class="parameter-box">
        <div class="parameter-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-z"></use>
          </svg>
          <span>{{ itemData.parameter.aperture }}</span>
        </div>
        <div class="parameter-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shuma-kuaimenxian"></use>
          </svg>
          <span>{{ itemData.parameter.shutter }}</span>
        </div>
        <div class="parameter-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon"></use>
          </svg>
          <span>{{ itemData.parameter.iso }}</span>
        </div>
      </div>
      <div class="other-box">
        <span>上传时间 {{ itemData.times.upTime }}</span>
        <span>拍摄时间 {{ itemData.times.shotTime }}</span>
      </div>
    </div>
    <footer class="footer"></footer>
  </div>
</template>

<script setup lang="ts">
  import { DefineComponent, ref } from 'vue'
  import { useRoute } from 'vue-router'
  // 引入swiper组件
  import { Swiper, SwiperSlide } from 'swiper/vue'
  // 引入swiper样式（按需导入）
  import 'swiper/css'
  // 轮播图底面的小圆点
  // import 'swiper/css/pagination'
  // 轮播图两边的左右箭头
  import 'swiper/css/navigation'
  // 轮播图的滚动条
  // import 'swiper/css/scrollbar'
  // 引入swiper核心和所需模块
  import { Pagination, Navigation, Scrollbar } from 'swiper'
  import { getImageData } from '@/http/api/photo'
  const route = useRoute()
  interface ItemData {
    id: number
    boxType: string
    photoMan: {
      [key: string]: string
    }
    introduction: {
      [key: string]: string
    }
    times: {
      [key: string]: string
    }
    likeNum: number
    images: string[]
    parameter: {
      [key: string]: string
    }
  }
  const pickFlg = ref(0)
  const modules = [Pagination, Navigation, Scrollbar]
  let mySwiper: DefineComponent
  const onSwiper = (swiper: any) => {
    // 存储swiper实例
    mySwiper = swiper
  }

  const handleSlideTo = (index: number) => {
    // 使用slideTo方法跳转到指定index
    pickFlg.value = index
    mySwiper.slideTo(index + 1)
  }
  // 监听切换
  const onSlideChange = (e: any) => {
    if (e.activeIndex - 1 === -1) {
      pickFlg.value = itemData.images.length - 1
      return
    }
    if (e.activeIndex - 1 === itemData.images.length) {
      pickFlg.value = 0
      return
    }
    pickFlg.value = e.activeIndex - 1
  }
  // 获取图片详情
  const itemData: ItemData = await getImageData(+route.params.id)
</script>

<style lang="scss" scoped>
  .photo-box {
    height: calc(100vh - 75px);
    background-color: #f7f8fa;
    display: flex;
    justify-content: center;
    align-items: center;
    .swiper-box {
      width: calc(100% - 380px);
      padding: 15px 0;
      box-sizing: border-box;
      background-color: #fff;

      :deep(.swiper) {
        position: relative;
        background-color: #fff;
        .swiper-wrapper {
          transition: all 1s !important;
        }
        .swiper-button-prev {
          left: 0;
        }
        .swiper-button-next {
          right: 0;
        }
        .swiper-button-prev,
        .swiper-button-next {
          position: absolute;
          width: 40px;
          height: 40px;
          top: 400px;
          z-index: 1;
          display: none;
          &::after {
            font-size: 40px;
            color: rgb(135, 135, 135);
          }
        }
      }

      &:hover {
        :deep(.swiper) {
          .swiper-button-prev,
          .swiper-button-next {
            display: block;
          }
        }
      }

      .image-box {
        width: 100%;
        height: 688px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;

        img {
          width: auto;
          height: 100%;
        }
      }

      .swiper-list {
        width: 100%;
        height: 115px;
        box-sizing: border-box;
        margin: 10px 0 0 0;
        ul {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          li {
            position: relative;
            list-style: none;
            overflow: hidden;
            margin: 0 2px;
            width: 98px;
            height: 98px;
            background-size: cover;
            background-position: center;

            &:hover {
              cursor: pointer;
              &::after {
                background-color: transparent;
              }
            }

            &::after {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(255, 255, 255, 0.428);
            }
          }
          .pickItem {
            &::after {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background-color: transparent;
            }
          }
        }
      }
    }
    .photo-info {
      min-width: 380px;
      height: 100%;
      border-left: 1px solid #ececec;
      padding: 20px 0;

      .user-box {
        width: 100%;
        height: auto;
        border-bottom: 1px solid #ececec;
        background-color: #fff;

        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }

        span {
          font-size: 14px;
          margin: 0 10px;
        }
      }

      .inturn-box {
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #ececec;
        background-color: #fff;
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        .love {
          width: 80px;
          height: 80px;
          position: relative;
          #btn {
            position: absolute;
            left: -100%;
            top: -100%;
            opacity: 0;
            z-index: 1;
          }

          .btn-love {
            position: absolute;
            z-index: 1;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            height: 100%;
            width: 100%;
            cursor: pointer;
          }
          .btn-love:after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            margin: 0 auto;
            background: url(../../../assets/image/web_heart_animation.png) 0 0 no-repeat;
            background-size: 2900%;
            height: 80px;
            width: 80px;
          }

          #btn:checked + .btn-love:after {
            -webkit-animation: heart-burst steps(28) 0.8s 1 both;
            animation: heart-burst steps(28) 0.8s 1 both;
          }

          @-webkit-keyframes heart-burst {
            0% {
              background-position: left;
            }
            100% {
              background-position: right;
            }
          }

          @keyframes heart-burst {
            0% {
              background-position: left;
            }
            100% {
              background-position: right;
            }
          }
        }

        .love-number {
          font-size: 14px;
          color: rgb(134, 134, 134);
          position: absolute;
          left: 60px;
          top: 40%;
        }
      }

      .description-box {
        width: 100%;
        border-bottom: 1px solid #ececec;
        background-color: #fff;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        // justify-content: center;
        .description-title {
          margin: 20px 0;
        }
        span {
          font-size: 12px;
          text-align: left;
        }
      }

      .detail {
        width: 100%;
        height: 50px;
        padding: 10px 10px;
        background-color: #eeeff2;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }

      .parameter-box {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border-bottom: 1px solid #ececec;
        padding: 5px 0;
        .parameter-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .icon {
            width: 3rem;
            height: 3rem;
          }

          span {
            font-size: 14px;
            margin: 10px 0;
          }
        }
      }

      .other-box {
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        span {
          display: block;
          font-size: 12px;
          margin: 10px;
        }
      }
    }

    .footer {
      height: 20px;
      width: 100%;
      background-color: #f7f8fa;
      position: absolute;
      bottom: 0px;
      border-top: 1px solid #ececec;
    }
  }
</style>
