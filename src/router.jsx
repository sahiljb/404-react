import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <Error />,
		element: <GuestLayout />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/about',
				element: <About />
			},
			{
				path: '/contact',
				element: <Contact />
			}
		]
	}
]);

export default router;