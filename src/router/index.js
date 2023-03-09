import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import MyContact from "../views/MyContact.vue";
import ThemesTousPage from "../views/ThemesTousPage.vue";
import AutrePage from "../views/AutrePage.vue";
import AnniversairePage from "../views/AnniversairePage.vue";
import BabyShowerPage from "../views/BabyShowerPage.vue";
import FaTPage from "../views/FaTPage.vue";
import GenderRevealPage from "../views/GenderRevealPage.vue";
import MariagePage from "../views/MariagePage.vue";
import LocPage from "../views/LocPage.vue";
import MentionsLegalesPage from "../views/MentionsLegalesPage.vue";


const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path:"/contact",
    name:"MyContact",
    component: MyContact
  },
  {
    path:"/ThemesTous",
    name:"ThemesTousPage",
    component: ThemesTousPage
  },
  {
    path:"/Autre",
    name:"AutrePage",
    component: AutrePage
  },
  {
    path:"/Anniversaire",
    name:"Anniversaire",
    component: AnniversairePage
  },
  {
    path:"/BabyShower",
    name:"BabyShower",
    component: BabyShowerPage
  },
  {
    path:"/FaT",
    name:"FaT",
    component: FaTPage
  },
  {
    path:"/GenderReveal",
    name:"GenderReveal",
    component: GenderRevealPage
  },
  {
    path:"/Mariage",
    name:"Mariage",
    component: MariagePage
  },
  {
    path:"/Loc",
    name:"Location",
    component: LocPage
  },
  {
    path:"/MentionsLégales",
    name:"MentionsLégales",
    component: MentionsLegalesPage
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
