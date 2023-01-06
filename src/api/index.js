import axios from "axios";

//HTTP 기본 리퀘스트, 리스폰스와 관련된 기본 설정
const config = {
    baseUrl : 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
const fetchNewsList = () => {
    return axios.get(`${config.baseUrl}news/1.json`);
}

const fetchJobs = () => {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

const fetchAskList = () => {
   return axios.get(`${config.baseUrl}ask/1.json`)
}

const fetchUserInfo = (username) => {
    return axios.get(`${config.baseUrl}user/${username}.json`)
}

const fetchAskInfo = (id) => {
    return axios.get(`${config.baseUrl}item/${id}.json`);
}

export {
    fetchNewsList,
    fetchJobs,
    fetchAskList,
    fetchUserInfo,
    fetchAskInfo
};
