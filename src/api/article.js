import axios from '../libs/axios'

export const getArticleById = id => {
  return axios.request({
    url: '/api/getArticleById',
    methods: 'get',
    params: {
      _id: id
    }
  })
}
