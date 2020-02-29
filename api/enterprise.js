import request from '@/utils/request'
const api_name = 'enterprise'
export default {
  hotlist() {   
    return request({
      url: `/${api_name}/search/hotlist`,
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
