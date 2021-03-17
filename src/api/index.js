/*
 * @Author: your name
 * @Date: 2021-03-16 15:37:37
 * @LastEditTime: 2021-03-16 15:37:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \DataV\src\api\index.js
 */
import request from "@/utils/request";

/**
 *  @param { 设备定义 } params
 */
// 设备定义树接口
export function deviceDefineTree(params) {
    return request({
        url: "/api/device/define/tree",
        method: "GET",
        params
    });
}