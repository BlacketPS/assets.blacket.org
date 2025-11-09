import Landing from "./index";
import { ENVIRONMENT } from "@constants";

export default {
	path: "/",
	component: <Landing />,
	document: {
		title: ENVIRONMENT.VITE_APP_NAME,
		description: "Please login using your credentials."
	}
} as CustomRoute;
