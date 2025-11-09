import { Sidebar } from "@components";

export default function useCreateRoute(route: CustomRoute) {
	const element = <>
		{route.document.title && <title>{route.document.title}</title>}
		{route.document.description && (
			<meta name="description" content={route.document.description} />
		)}

		{route.useSidebar && <Sidebar />}

		{route.component}
	</>;

	const routes = [
		{
			id: route.path,
			path: route.path,
			element: element
		}
	];

	if (route.alias) {
		const aliases = Array.isArray(route.alias) ? route.alias : [route.alias];

		for (const alias of aliases) {
			routes.push({
				id: alias,
				path: alias,
				element
			});
		}
	}

	return routes;
}
