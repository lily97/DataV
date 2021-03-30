import request from "@/utils/request";


// 宣传视频
export function getVideo(params) {
    return request({
        url: "/Video/TopVideo",
        method: "GET",
        params
    });
}

// 诉求分类占比
export function getAppealAccounted(params) {
    return request({
        url: "/Data/AppealCount",
        method: "GET",
        params
    });
}

// 诉求数量趋势
export function getAppealNum(params) {
    return request({
        url: "/Data/AppealCountRank",
        method: "GET",
        params
    });
}

// 诉求办结率排行
export function getAppealRanking(params) {
    return request({
        url: "/AppealComplete/Data",
        method: "GET",
        params
    });
}

// 企业诉求列表
export function getAppeaList(params) {
    return request({
        url: "/Appeal/List",
        method: "GET",
        params
    });
}

// 热词列表
export function getWordList(params) {
    return request({
        url: "/Data/HotWord",
        method: "GET",
        params
    });
}

// 涉企部门数量
export function getDepartList(params) {
    return request({
        url: "/Statistics/StatisticsData",
        method: "GET",
        params
    });
}

// 诉求分类情况
export function getAppealCount(params) {
    return request({
        url: "/Statistics/AppealCount",
        method: "GET",
        params
    });
}


// 诉求处理情况
export function getAppealTimeCount(params) {
    return request({
        url: "/Statistics/AppealTimeCount",
        method: "GET",
        params
    });
}


// 地图
export function getMapInfo(params) {
    return request({
        url: "/Data/CityAppeals",
        method: "GET",
        params
    });
}



