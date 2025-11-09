import type { ReactNode } from "react";
import { AppLoader } from "@components";

export default function Wrapper({ children }: { children: ReactNode }) {
	return (
		<AppLoader>
			{children}
		</AppLoader>
	);
}
