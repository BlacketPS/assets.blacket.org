import { useRouteError } from "react-router-dom";

export default function Error() {
	const error = useRouteError() as RouteError;

	return (
		<div>
			<h1>Error {error?.status}</h1>
			<p>{error?.statusText || error?.message}</p>
		</div>
	);
}
