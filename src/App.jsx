import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import Home from './pages/Main/Home/Home';
import Login from './pages/Login/Login';
import UserProfile from './pages/Main/Profile/UserProfile/UserProfile';
import PostUpload from './pages/Main/Post/PostUpload/PostUpload';
import Chat from './pages/Main/Chat/Chat';
import NotFound from './pages/NotFound/NotFound';
import Root from './pages/Root';
// import Signup from './pages/Signup/Signup';
// import Search from './pages/Main/Home/Search/Search';
// import MyProfile from './pages/Main/Profile/MyProfile/MyProfile';
// import ProfileEdit from './pages/Main/Profile/MyProfile/ProfileEdit/ProfileEdit';
// import ProductUpload from './pages/Main/Profile/MyProfile/Product/ProductUpload/ProductUpload';
// import Post from './pages/Main/Post/Post';
// import ChatRoom from './pages/Main/Chat/ChatRoom/ChatRoom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'chat', element: <Chat /> },
      { path: 'post_upload', element: <PostUpload /> },
      { path: 'user_profile/:id', element: <UserProfile /> },
    ],
  },
]);

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={router} />;
    </React.StrictMode>
  );
}
export default App;
