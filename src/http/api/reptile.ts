/**
 * @description 爬虫相关的后端接口
 * @author mosaic
 */

import { axios } from '../axios'

/**
 *
 * 爬取博客数据
 * @return {*}
 */
export const crawlingBlogData = () => {
  return axios({
    url: '/api/reptile/blog',
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
