import { Home } from "./pages/home/home.component";
import { Blog } from "./pages/blog/blog.component";

export const routes = [
  { path: "", component: Home },
  { path: "blog", component: Blog }
];

export const navigatableComponents = [
  Home,
  Blog
];
