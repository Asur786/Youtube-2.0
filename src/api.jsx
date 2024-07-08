import axios from "axios";

const request = axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyCl81xBLFkXSUm5wSPkHJ0sakj9188InIU",
    }
})

export default request;