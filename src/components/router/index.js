import { createRouter, createWebHistory } from "vue-router";
import Carousel from "../components/Carousel.vue";
import FourDivs from "../components/FourDivs.vue";
import ApiComponent from "../components/ApiComponent.vue";
import AboutUs from "../components/AboutUs.vue";
import BgVideo from "../components/BgVideo.vue";
import TodoList from "../components/Todo/TodoList.vue";
import TodoListRedux from "../components/Todo/List-Redux/TodoListRedux.vue";
import ContextAPI from "../components/Todo/contexts/ContextAPI.vue";
import TodoApi from "../components/Todo/TodoApi.vue";

const routes = [
  {
    path: "/",
    component: {
      template: `
        <div>
          <div style="width: 100%;" class="carousel-div">
            <carousel />
          </div>
          <fourDivs />
          <bgVideo />
        </div>
      `,
      components: {
        Carousel,
        FourDivs,
        BgVideo,
      },
    },
  },
  { path: "/api", component: ApiComponent },
  { path: "/AboutUs", component: AboutUs },
  { path: "/TodoList", component: TodoList },
  { path: "/TodoListRedux", component: TodoListRedux },
  { path: "/TodoApi", component: TodoApi },
  { path: "/ContextAPI", component: ContextAPI },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
