export default {
    SET_NEWS(state, news) { //이 news라는 인자는 action에서 context.commit으로 넘어온 response.data
        state.news = news;
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },
    SET_ASK_LIST(state, askList) {
        state.askList = askList;
    },
    SET_USER_INFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    SET_ASK_INFO(state, askInfo) {
        state.askInfo = askInfo;
    }
}
