import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './Home.jsx';

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
        },
    ],
    {
        basename: "/PRG8-Front-End",
    }
);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
