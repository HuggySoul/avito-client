import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdList from "../pages/adList/ui/adList/adList";
import { routes } from "../shared/router";
import AdItem from "../pages/adItem/ui/adItem/adItem";
import AdForm from "../pages/adFrom/ui/adForm/adForm";
const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path={routes.adList.path} element={<AdList />} />
				<Route path={routes.adItem.path} element={<AdItem />} />
				<Route path={routes.adForm.path} element={<AdForm />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
