import request from '@/utils/request'
const api_group = 'base'
const api_name = 'label'
export default {
  toplist() {   
    return request({
      url: `/${api_group}/${api_name}`,
      method: 'get'
    })
  },
  list() {   
    return request({
      url: `/${api_group}/${api_name}/list`,
      method: 'get'
    })
  },
  addul(labelid){
    return request({
      url: `/${api_group}/${api_name}/${labelid}`,
      method: 'put'
    })
  }
}
