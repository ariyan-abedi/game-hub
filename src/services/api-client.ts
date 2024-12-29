import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'9e3de048a6594e4ab5be4b268fb3d339'
}
})