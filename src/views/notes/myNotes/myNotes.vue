<!--
 * @LastEditors: 赵兴
 * @LastEditTime: 2021-01-26 15:59:03
-->

<template>
  <div class="button-body">
    <div class="search">
      <input type="search" placeholder="search" />
      <button class="dimension-button">
        搜索
        <div class="dot"></div>
      </button>
    </div>
  </div>
  <div class="note-body">
    <div class="note-item" v-for="item in noteData" :key="item.time">
      <div class="note-timeTitle">{{ item.time }}</div>
      <div class="note-list">
        <div class="list-item" v-for="note in item.notes" :key="note.postTitle">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">
                {{ note.postTitle }}
                <!-- <span class="badge rounded-pill bg-danger">new</span> -->
              </h5>
              <p class="card-text">
                {{ note.summary }}
              </p>
              <a :href="note.link" class="btn btn-primary"> 阅读全文 </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import { crawlingBlogData } from '../../../http/api/reptile'
  interface BlogInfo {
    dayTitle: string
    postTitle: string
    summary: string
    link: string | undefined
  }
  interface BlogInfoList {
    [key: string]: BlogInfo[]
  }
  interface NoteList {
    time: string
    notes: BlogInfo[]
  }
  const noteData: NoteList[] = reactive([])
  let rawBlogList: BlogInfoList
  // 获取博客数据
  const showData = async () => {
    await crawlingBlogData().then((res) => {
      rawBlogList = res?.data
      // 解析
      analyzerData(rawBlogList)
    })
  }
  showData()

  const analyzerData = (blogList: BlogInfoList) => {
    for (let index in blogList) {
      const obj: NoteList = {
        time: index,
        notes: blogList[index]
      }
      noteData.push(obj)
    }
  }
</script>

<style scoped lang="scss">
  .button-body {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .search {
      width: 1200px;
      height: auto;
      display: flex;
      justify-content: center;
      input[type='search'] {
        border: solid 1px #ccc;
        padding: 9px 10px 9px 32px;
        width: 110px;
        height: 50px;
        border-radius: 10em;
        transition: all 0.5s;
        margin: 20px 0 0 0;
        &:focus {
          width: 250px;
          background-color: #fff;
          border-color: #66ccbe;
          outline: none;
          box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
        }
      }
      button {
        position: relative;
        display: inline-block;
        cursor: pointer;
        outline: none;
        border: 0;
        vertical-align: middle;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        &.dimension-button {
          // height: 40px;
          margin: 1%;
          font-weight: 600;
          color: $text;
          text-transform: uppercase;
          padding: 0.5em 1.5em;
          background: $light-blue;
          border: 2px solid $blue-border;
          border-radius: 0.75em;
          transform-style: preserve-3d;
          transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
            background 150ms cubic-bezier(0, 0, 0.58, 1);
          &::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: $dark-blue;
            border-radius: inherit;
            box-shadow: 0 0 0 2px $blue-border, 0 0.625em 0 0 $blue-shadow;
            transform: translate3d(0, 0.75em, -1em);
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
              box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
          }
          &:hover {
            background: $blue;
            transform: translate(0, 0.25em);
            &::before {
              box-shadow: 0 0 0 2px $blue-border, 0 0.5em 0 0 $blue-shadow;
              transform: translate3d(0, 0.5em, -1em);
            }
          }
          &:active {
            background: $blue;
            transform: translate(0em, 0.75em);
            &::before {
              box-shadow: 0 0 0 2px $blue-border, 0 0 $blue-shadow;
              transform: translate3d(0, 0, -1em);
            }
          }
        }
      }
    }
  }
  .note-body {
    width: 100%;
    height: 100%;
    .note-item {
      width: 1200px;
      height: auto;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      .note-timeTitle {
        width: 1200px;
        height: 50px;
        padding: 1%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 600;
        color: $theme-color;
        &::after {
          position: absolute;
          left: 424px;
          content: '';
          height: 1px;
          width: 80px;
          background: $theme-color;
        }
        &::before {
          position: absolute;
          right: 424px;
          content: '';
          height: 1px;
          width: 80px;
          background: $theme-color;
        }
      }
      .note-list {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        // flex-basis: 25%;
        .list-item {
          margin: 1.5%;
          .card {
            .card-body {
              .card-title,
              .card-text {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
              }
              .card-text {
                -webkit-line-clamp: 3;
              }
            }
          }
        }
      }
    }
  }
</style>
