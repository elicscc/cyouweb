import request from '@/utils/request'
const api_name = 'gathering'
export default {
  page(page, size) {   
    return request({
      url: `/${api_name}/${page}/${size}`,
      method: 'get'
    })
  },
  findById(id) {
    return request({
      url: `/${api_name}/${id}`,
      method: 'get'
    })
  }
}
