import Error from "./index";
import { ENVIRONMENT } from "@constants";

export default {
	path: "*",
	component: <Error />,
	document: {
		title: `Error | ${ENVIRONMENT.VITE_APP_NAME}`,
		description: "Something went wrong."
	}
} as CustomRoute;
