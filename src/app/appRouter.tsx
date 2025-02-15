import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdList from "../pages/adList/ui/adList/adList";
import { routes } from "../shared/router";
import AdItem from "../pages/adItem/ui/adItem/adItem";

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path={routes.adList.path} element={<AdList />} />
				<Route path={routes.adItem.path} element={<AdItem />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
