// AUTH
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";
import Dashboard from "../components/auth/DashBoard.vue";

// Instructors
import CreateTask from "../components/instructors/CreateTask.vue";
import TaskList from "../components/instructors/TaskList.vue";
import ReviewList from "../components/instructors/ReviewList.vue";

// Users
import EditImages from "../components/students/EditImages.vue";
import Tutorials from "../components/students/Tutorials.vue";
import RatedImages from "../components/students/RateImages.vue";

export const routes = [
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  // Instructor Routes
  { path: "/dashboard/task", name: "CreateTask", component: CreateTask },
  { path: "/dashboard/tasklist", name: "TaskList", component: TaskList },
  { path: "/dashboard/review", name: "ReviewList", component: ReviewList },

  // Users Routes
  { path: "/dashboard/editImages", name: "EditImages", component: EditImages },
  { path: "/dashboard/tutorials", name: "Tutorials", component: Tutorials },
  { path: "/dashboard/ratedImages", name: "RatedImages", component: RatedImages },

  // Unknown Path
  { path: "*", redirect: "/register" }
];
