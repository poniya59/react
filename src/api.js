import axios from "axios"
import { string } from "prop-types"

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export default {

    //모든글 불러오기
    getAllPosts(){
        return axios.get('/posts/')
    },
    //글작성하기
    createPost(data) {
        return axios.post('/posts/', data)
    },

    deletePost(id) {
        return axios.delete('/posts/'+String(id))
    },



}