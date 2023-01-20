import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//pages
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Smoothies, { loadSmoothies } from './pages/Smoothies';
import Smoothie, { loadSmoothie } from './pages/Smoothie';
import ContactUs from './components/Contact-Us';
import About from './pages/About';
const queryClient = new QueryClient();

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path='smoothies'>
				<Route
					index
					element={<Smoothies />}
					loader={loadSmoothies(queryClient)}
				/>
				<Route
					path=':id'
					element={<Smoothie />}
					loader={loadSmoothie(queryClient)}
				/>
			</Route>
			<Route path='contact-us' element={<ContactUs />} />
			<Route path='about' element={<About />} />
		</Route>
	)
);

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};

export default App;
