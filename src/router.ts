import { Router } from "@vaadin/router";
import "@/views/pages/";

const router = new Router(document.querySelector("#outlet"));
router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/about", component: "about-page" },
  { path: "(.*)", component: "not-found-page" },
]);