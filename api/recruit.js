import request from '@/utils/request'
const api_name = 'recruit'
export default {
  recommend() {   
    return request({
      url: `/${api_name}/search/recommend`,
      method: 'get'
    })
  },
  newlist() {
    return request({
      url: `/${api_name}/search/newlist`,
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
