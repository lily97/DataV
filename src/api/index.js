import request from "@/utils/request";


export function allList(params) {
    return request({
        url: "/Data/StatisticsData",
        method: "GET",
        params
    });
}