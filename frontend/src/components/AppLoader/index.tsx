// import { useEffect, useState } from "react";
// import { api } from "@api";
// import { useUserStore } from "@stores/UserStore";
// import { storage } from "@utils";

import type { AppLoaderProps } from "./appLoader";

// export default function AppLoader({ children }: AppLoaderProps) {
// 	const { setUser } = useUserStore();

// 	const [loading, setLoading] = useState<boolean>(true);
// 	const [completed, setCompleted] = useState<number>(0);

// 	const max = 0 + (storage.get("token") ? 1 : 0);

// 	useEffect(() => {
// 		if (completed >= max) return;

// 		if (storage.get("token")) api("users.get", { params: { user: "me" } })
// 			.then((res) => setUser(res))
// 			.catch((err) => console.error("AppLoader: Failed to fetch user:", err))
// 			.finally(() => setCompleted((c) => c + 1));
// 	}, []);

// 	useEffect(() => {
// 		if (completed >= max) setLoading(false);
// 	}, [completed]);

// 	if (loading) return null;
// 	else return children;
// }

export default function AppLoader({ children }: AppLoaderProps) {
	return children;
}
