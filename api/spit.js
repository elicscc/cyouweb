import request from '@/utils/request'
const api_group = ''
const api_name = 'spit'
export default {
  search(page,size,searchMap) {   
    return request({
      url: `${api_group}/${api_name}/search/${page}/${size}`,
      method: 'post',
      data:searchMap
    })
  },
  thumbup(id) {
    return request({
      url: `${api_group}/${api_name}/thumbup/${id}`,
      method: 'put'
    })
  },
  save(pojo) {
    return request({
      url: `${api_group}/${api_name}`,
      method: 'post',
      data:pojo
    })
  },
  findById(id){
    return request({
      url: `${api_group}/${api_name}/${id}`,
      method: 'get'
    })
  },
  commentlist(id,page,size){
    return request({
      url: `${api_group}/${api_name}/comment/${id}/${page}/${size}`,
      method: 'get'
    })
  }
  
}
