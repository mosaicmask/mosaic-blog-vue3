<template>
  <div class="photography">
    <div class="photography-banner">
      <div class="image-bg">
        <div class="content-box">
          <h1>让回忆触手可及!</h1>
          <a href="https://500px.com.cn/community/discover?t=editors">
            <div class="button">获得灵感</div>
          </a>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1629431144">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            class="shape-fill"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="gallery">
      <div class="gallery-title">我的摄影画廊</div>
      <!-- grid瀑布流-->
      <section class="section">
        <div class="grid">
          <!--  item.boxType 表示尺寸 具体类型可查看对应css -->
          <template v-for="item in imageList" :key="item.id">
            <div
              :class="['item', item.boxType]"
              :style="{ backgroundImage: 'url(' + item.images[0] + ')' }"
              @click="goDetails('photoItems', item.id)"
            >
              <div class="item__details">{{ item.introduction.name }}</div>
            </div>
          </template>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { getImageListData } from '@/http/api/photo'
  const route = useRouter()
  const goDetails = (where: string, id: number) => {
    route.push({
      name: where,
      params: { id: id }
    })
  }
  const imageList = await getImageListData().then((res) => res)
</script>

<style lang="scss" scoped>
  .photography {
    width: 100%;
    height: auto;
    .photography-banner {
      height: 90vh;
      width: 100%;
      position: relative;
      overflow: hidden;
      .image-bg {
        width: 100%;
        height: 100%;
        position: relative;
        margin: 0 auto;
        background: url('../../../assets/image/banner/mini-1.jpg') no-repeat center center/cover;
        opacity: 1;
        animation: toggleBackground 120s linear infinite;

        .content-box {
          position: absolute;
          top: 350px;
          left: 150px;
          display: flex;
          flex-direction: column;
          h1 {
            font-size: 48px;
            color: #fff;
            margin: 0 0 24px;
          }
          a {
            text-decoration: none;
          }
          .button {
            width: 215px;
            font-size: 18px;
            height: 64px;
            line-height: 64px;
            border-radius: 32px;
            font-size: 24px;
            font-weight: 500;
            color: #222;
            background: #fff;
            border: 0;
            transition: 0.3s;
          }
          .button:hover {
            cursor: pointer;
            background: rgb(243, 243, 243);
          }
        }
      }
      // ！！！！！！背景图切换时会出现闪烁问题（待解决）
      @keyframes toggleBackground {
        @for $i from 1 to 100 {
          @if $i <= 15 {
            #{$i * 1%} {
              background: url('../../../assets/image/banner/mini-1.jpg')
                no-repeat
                center
                center/cover;
              opacity: 1;
            }
          }
          @if $i > 15 and $i <= 40 {
            #{$i * 1%} {
              background: url('../../../assets/image/banner/mini-2.jpg')
                no-repeat
                center
                center/cover;
              opacity: 1;
            }
          }
          @if $i > 40 and $i <= 65 {
            #{$i * 1%} {
              background: url('../../../assets/image/banner/mini-3.jpg')
                no-repeat
                center
                center/cover;
              opacity: 1;
            }
          }
          @if $i > 65 and $i <= 90 {
            #{$i * 1%} {
              background: url('../../../assets/image/banner/mini-4.jpg')
                no-repeat
                center
                center/cover;
              opacity: 1;
            }
          }
          @if $i > 90 and $i <= 100 {
            #{$i * 1%} {
              background: url('../../../assets/image/banner/mini-1.jpg')
                no-repeat
                center
                center/cover;
              opacity: 1;
            }
          }
        }
      }
      .custom-shape-divider-bottom-1629431144 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
      }

      .custom-shape-divider-bottom-1629431144 svg {
        position: relative;
        display: block;
        width: calc(162% + 1.3px);
        height: 170px;
      }

      .custom-shape-divider-bottom-1629431144 .shape-fill {
        fill: #ffffff;
      }
    }
    .gallery {
      width: 100%;
      height: auto;
      &-title {
        font-size: 36px;
        font-weight: 500;
      }
      // grid 瀑布流
      .section {
        display: none;
        padding: 2rem;

        @media screen and (min-width: 768px) {
          padding: 4rem;
        }

        @supports (display: grid) {
          display: block;
        }
      }

      h1 {
        font-size: 2rem;
        margin: 0 0 1.5em;
      }

      .grid {
        display: grid;
        grid-gap: 30px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-rows: 150px;
        grid-auto-flow: row dense;
      }

      .item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        box-sizing: border-box;
        background: #0c9a9a;
        color: #fff;
        grid-column-start: auto;
        grid-row-start: auto;
        color: #fff;
        background-size: cover;
        background-position: center;
        box-shadow: -2px 2px 10px 0px rgba(#444, 0.4);
        transition: transform 0.3s ease-in-out;
        cursor: pointer;
        counter-increment: item-counter;

        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: black;
          opacity: 0.3;
          transition: opacity 0.3s ease-in-out;
        }

        &:hover {
          transform: scale(1.05);

          &:after {
            opacity: 0;
          }
        }

        &--medium {
          grid-row-end: span 2;
        }

        &--large {
          grid-row-end: span 3;
        }

        &--full {
          grid-column-end: auto;

          @media screen and (min-width: 768px) {
            grid-column: 1/-1;
            grid-row-end: span 2;
          }
        }

        &__details {
          position: relative;
          z-index: 1;
          padding: 15px;
          color: #444;
          background: #fff;
          text-transform: lowercase;
          letter-spacing: 1px;
          color: #828282;

          // 序号
          // &:before {
          //   content: counter(item-counter);
          //   font-weight: bold;
          //   font-size: 1.1rem;
          //   padding-right: 0.5em;
          //   color: #444;
          // }
        }
      }
    }
  }
</style>
