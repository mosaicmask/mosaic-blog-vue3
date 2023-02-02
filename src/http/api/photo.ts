/**
 * @description 爬虫相关的后端接口(待实现，暂时请求本地json)
 * @author mosaic
 */
import { axios } from '../axios'

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
/**
 *
 * 获取图片列表数据
 * @return {*}
 */
export const getImageListData = () => {
  return axios({
    url: '/data/imageInfo.json',
    method: 'get'
  })
    .then((res) => res)
    .catch((error: any) => {
      if (!error.isCancel) {
        //错误数据处理
        console.log(error.message)
      }
    })
}
/**
 *
 * 获取图片详情数据
 * @param {number} id
 * @return {*}
 */
export const getImageData = (id: number) => {
  return axios({
    url: '/data/imageInfo.json',
    method: 'get'
  })
    .then((res) => {
      const result = res.find((element: ItemData) => element.id == id)
      return result
    })
    .catch((error: any) => {
      if (!error.isCancel) {
        //错误数据处理
        console.log(error.message)
      }
    })
}
