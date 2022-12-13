import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import Home from './pages/Main/Home/Home';
import Post from './pages/Main/Post/Post';
import NotFound from './pages/NotFound/NotFound';
import Root from './components/Root';
import Chat from './pages/Main/Chat/Chat';
import MyProfile from './pages/Main/Profile/MyProfile/MyProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/chat', element: <Chat /> },
      { path: '/product_upload', element: <Post /> },
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
