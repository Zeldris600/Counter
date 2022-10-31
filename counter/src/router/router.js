import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
const routes = [
    {
        path:'/',
        element: App
    },
    {
        path:'/login',
        element: Login
    },

]
const router = createBrowserRouter(routes);
export default router;