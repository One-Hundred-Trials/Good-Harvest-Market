import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GlobalStyle } from './styles/GlobalStyles';
import Home from 'pages/Main/Home/Home';
import Login from 'pages/Login/Login';
import LoginEmail from 'pages/Login/LoginEmail/LoginEmail';
import Signup from 'pages/Signup/Register';
import MyProfile from 'pages/Main/Profile/MyProfile/MyProfile';
import UserProfile from 'pages/Main/Profile/UserProfile/UserProfile';
import PostUpload from 'pages/Main/Post/PostUpload/PostUpload';
import Chat from 'pages/Main/Chat/Chat';
import NotFound from 'pages/NotFound/NotFound';
import Root from 'pages/Root';
import Search from 'pages/Main/Home/Search/Search';
import ProfileEdit from 'pages/Main/Profile/MyProfile/ProfileEdit/ProfileEdit';
import ProductUpload from 'pages/Main/Profile/MyProfile/Product/ProductUpload/ProductUpload';
import ProductEdit from 'pages/Main/Profile/MyProfile/Product/ProductEdit/ProductEdit';
import Post from 'pages/Main/Post/Post';
import PostEdit from 'pages/Main/Post/PostEdit/PostEdit';
import ChatRoom from 'pages/Main/Chat/ChatRoom/ChatRoom';
import FollowingList from 'pages/Main/Profile/MyProfile/FollowingList/FollowingList';
import FollowerList from 'pages/Main/Profile/MyProfile/FollowerList/FollowerList';
import Splash from 'pages/Splash/Splash';
import './styles/font.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'chat', element: <Chat /> },
      { path: 'my_profile/:accountname', element: <MyProfile /> },
      { path: 'user_profile/:id', element: <UserProfile /> },
    ],
  },
  {
    path: '/',
    index: true,
    element: <Splash />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/login/login_email',
    element: <LoginEmail />,
  },
  {
    path: '/login/sign_up',
    element: <Signup />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/profile_edit',
    element: <ProfileEdit />,
  },
  {
    path: '/post_upload',
    element: <PostUpload />,
  },
  {
    path: '/product_upload',
    element: <ProductUpload />,
  },
  {
    path: '/product/:id/edit',
    element: <ProductEdit />,
  },
  {
    path: '/post/:id',
    element: <Post />,
  },
  {
    path: '/post/:id/edit',
    element: <PostEdit />,
  },
  {
    path: '/chat/:id',
    element: <ChatRoom />,
  },
  {
    path: '/:accountname/following',
    element: <FollowingList />,
  },
  {
    path: '/:accountname/follower',
    element: <FollowerList />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </HelmetProvider>
    </React.StrictMode>
  );
}
export default App;
