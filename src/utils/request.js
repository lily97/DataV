import axios from "axios";
import { MessageBox, Message } from "element-ui";
// import store from "@/store";
import { getToken } from "@/utils/auth";

// create an axios instance
const service = axios.create({
    // baseURL: process.env.VUE_APP_GYCLOUD_API, // url = base url + request url
    // baseURL: process.env.BASE_URL, // url = base url + request url
    baseURL: 'http://192.168.0.155:8081' + process.env.VUE_APP_GYCLOUD_API,
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 15000 // request timeout
});
console.log(service, 'serviceserviceservice', process.env);
// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        if (getToken()) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            config.headers["Authorization"] = "Bearer " + getToken();
        }
        return config;
    },
    error => {
        // do something with request error
        console.log(error, '11111111111'); // for debug
        return Promise.reject(error);
    }
);

// response interceptor
// service.interceptors.response.use(
//     response => {
//         const res = response.data;
//         if (res.code !== 200) {
//             Message({
//                 message: res.msg || "Error",
//                 type: "error",
//                 duration: 3 * 1000
//             });
//             if (res.code == 127 || res.code == 116) {
//                 // 登录失效，请重新登录
//                 setTimeout(() => {
//                     store.dispatch("user/resetToken").then(res => {
//                         console.log(res);
//                         location.reload();
//                     });
//                 }, 5000);
//             }
//             return Promise.reject(new Error(res.msg || "Error"));
//         } else {
//             return res;
//         }
//     },
//     error => {
//         console.log("err" + error); // for debug
//         Message({
//             message: error,
//             type: "error",
//             duration: 3 * 1000
//         });
//         return Promise.reject(error);
//     }
// );

export default service;