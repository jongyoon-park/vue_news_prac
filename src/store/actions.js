import {fetchAskInfo, fetchAskList, fetchJobs, fetchNewsList, fetchUserInfo} from "@/api";
export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                context.commit('SET_NEWS', response.data);
            })
            .catch(error => console.log(error))
    },
    FETCH_JOBS({commit}) {
        fetchJobs()
            .then(({data}) => commit('SET_JOBS', data))
            .catch(error => console.log(error))
    },
    FETCH_ASK_LIST({commit}) {
        fetchAskList()
            .then(({data}) => commit('SET_ASK_LIST', data))
            .catch(error => console.log(error))
    },
    FETCH_USER_INFO({commit}, username) {
        fetchUserInfo(username)
            .then(({data}) => commit('SET_USER_INFO', data))
            .catch(error => console.log(error))
    },
    FETCH_ASK_INFO({commit}, id) {
        fetchAskInfo(id)
            .then(({data}) => commit('SET_ASK_INFO', data))
            .catch(error => console.log(error))
    }
}
