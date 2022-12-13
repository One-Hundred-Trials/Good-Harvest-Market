import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import Home from './pages/Main/Home/Home';
import Login from './pages/Login/Login';
import MyProfile from './pages/Main/Profile/MyProfile/MyProfile';
import Post from './pages/Main/Post/Post';
import NotFound from './pages/NotFound/NotFound';
import Root from './components/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/post/:id', element: <Post /> },
      { path: '/my_profile', element: <MyProfile /> },
    ],
  },
]);

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
export default App;
