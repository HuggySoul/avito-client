import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./appRouter";
import Providers from "./providers";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Providers>
			<AppRouter />
		</Providers>
	</StrictMode>
);
