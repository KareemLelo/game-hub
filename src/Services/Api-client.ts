import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: "d6cac5589d9147fdb7f10cf04678b308"
    }
})