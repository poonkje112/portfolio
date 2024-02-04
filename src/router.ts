import { Router } from "@vaadin/router";
import "@/views/pages/";

const router = new Router(document.querySelector("#outlet"));
router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "(.*)", component: "not-found-page" },
]);

document.addEventListener("browse", (e: any) => {
  const { target } = e.detail;
  if(target === "#") return;

  Router.go(target);
});