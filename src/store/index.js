import {createStore} from "vuex";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import state from "@/store/state";
import getters from "@/store/getters";

//state는 여러 컴포넌트에서 공유되는 속성(상태)를 가리킴
//복잡한 서비스의 경우 한 개 컴포넌트에서 들고 있는 데이터를 다른 컴포넌트에서 조작해야할 경우가 있음

const store = createStore({
    state,
    getters,
    //state에 값을 담아주는 역할
    mutations,
    // api 호출
    actions,
});

export default store;

