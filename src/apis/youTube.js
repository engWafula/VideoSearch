import axios from "axios"

const KEY = "AIzaSyAQgtxknYJW_UMSSOE2cYn19Hherb_JT9o";



export default axios.create({
    baseURL:  "https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults:10,
        key:KEY,
        type: 'video',
    }

})