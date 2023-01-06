//vue3부터 routes 사용 시 createRouter를 이용해 routes 생성 -> npm install vue-routes@next
import NewsViews from "@/views/NewsView.vue";
import AskView from "@/views/AskView.vue";
import JobsView from "@/views/JobsView.vue";
import UserView from "@/views/UserView.vue";
import ItemView from "@/views/ItemView.vue";

const routes = [
    {
        path: '/',
        redirect: '/news'
    },
    {
        //path : url 정보
        //component : url로 이동했을 때 보여줄 컴포넌트(페이지라고 보면 됨)
        path: '/news',
        name: 'news',
        component: NewsViews
    },
    {
        path: '/ask',
        name: 'ask',
        component: AskView
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView
    },
    {   //동적 라우터
        path: '/user/:id',
        component: UserView
    },
    {
        path: '/item/:id',
        component: ItemView
    }
]

export default routes;
