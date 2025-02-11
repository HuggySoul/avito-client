import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdList from "../pages/adList/ui/adList/adList";
import routes from "../shared/router/routes";

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path={routes.adList.path} element={<AdList />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
