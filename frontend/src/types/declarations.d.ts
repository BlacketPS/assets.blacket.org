declare global {
	interface RouteError {
		status?: number;
		statusText?: string;
		message?: string;
	}

	interface CustomRoute {
		path: string;
		alias?: string | string[];
		component: JSX.Element;
		document: {
			title: string;
			description: string;
		};
		useSidebar?: boolean;
	}
}

declare module "*.module.scss" {
	const content: { [className: string]: string };

	export default content;
}

export { };
