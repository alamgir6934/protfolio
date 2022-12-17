import Details from "../Home/Details/Details";
import Home from "../Home/Home";
import MyProject from "../Home/Project/MyProject";
import Main from "../Main/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'project',
                loader: async () =>
                    fetch('/projects.json'),

                element: <MyProject></MyProject>

            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`/details/${params.id}`),
                element: <Details></Details>

            }
        ]
    }
])
export default router