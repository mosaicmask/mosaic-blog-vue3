<template>
  <div class="resume-body">
    <div class="resume-canvas">
      <vue-pdf-embed :source="source1" />
    </div>
    <div class="download-box">
      <button class="download-button" @click="downloadPDF()">
        <div class="docs">
          <svg
            class="css-i6dzq1"
            stroke-linejoin="round"
            stroke-linecap="round"
            fill="none"
            stroke-width="2"
            stroke="currentColor"
            height="20"
            width="20"
            viewBox="0 0 24 24"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line y2="13" x2="8" y1="13" x1="16"></line>
            <line y2="17" x2="8" y1="17" x1="16"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          Download PDF
        </div>
        <div class="download">
          <svg
            class="css-i6dzq1"
            stroke-linejoin="round"
            stroke-linecap="round"
            fill="none"
            stroke-width="2"
            stroke="currentColor"
            height="24"
            width="24"
            viewBox="0 0 24 24"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line y2="3" x2="12" y1="15" x1="12"></line>
          </svg>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import VuePdfEmbed from 'vue-pdf-embed'
  const source1 = `https://mosaic-file-repository.oss-cn-shenzhen.aliyuncs.com/PDF/xz-resume.pdf`
  // 下载
  const downloadPDF = () => {
    window.open('https://mosaic-file-repository.oss-cn-shenzhen.aliyuncs.com/PDF/xz-resume.pdf')
  }
</script>

<style scoped lang="scss">
  .resume-body {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0 50px 0;
    .resume-canvas {
      width: 1200px;
      overflow: hidden;
    }
    .download-box {
      .download-button {
        position: relative;
        border-width: 0;
        color: white;
        font-size: 15px;
        font-weight: 600;
        border-radius: 4px;
        z-index: 1;
        padding: 0;
        .docs {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          min-height: 40px;
          padding: 0 10px;
          border-radius: 4px;
          z-index: 1;
          background-color: #242a35;
          border: solid 1px #e8e8e82d;
          transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
        }
      }

      .download-button:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
          rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
          rgba(0, 0, 0, 0.09) 0px -3px 5px;
      }

      .download {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 90%;
        margin: 0 auto;
        z-index: -1;
        border-radius: 4px;
        transform: translateY(0%);
        background-color: #01e056;
        border: solid 1px #01e0572d;
        transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
      }

      .download-button:hover .download {
        transform: translateY(100%);
      }

      .download svg polyline,
      .download svg line {
        animation: docs 1s infinite;
      }

      @keyframes docs {
        0% {
          transform: translateY(0%);
        }

        50% {
          transform: translateY(-15%);
        }

        100% {
          transform: translateY(0%);
        }
      }
    }
  }
</style>
