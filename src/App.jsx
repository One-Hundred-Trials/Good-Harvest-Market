import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from './styles/GlobalStyles';
import Home from './pages/Main/Home/Home'
import Login from './pages/Login/Login';
import Signup from "./pages/Signup/Signup";
import Search from './pages/Main/Home/Search/Search'
import UserProfile from './pages/Main/Profile/UserProfile/UserProfile'
import MyProfile from './pages/Main/Profile/MyProfile/MyProfile'
import ProfileEdit from './pages/Main/Profile/MyProfile/ProfileEdit/ProfileEdit'
import ProductUpload from './pages/Main/Profile/MyProfile/Product/ProductUpload/ProductUpload'
import Post from './pages/Main/Post/Post'
import PostUpload from './pages/Main/Post/PostUpload/PostUpload'
import Chat from './pages/Main/Chat/Chat'
import ChatRoom from './pages/Main/Chat/ChatRoom/ChatRoom'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/login/login_email" element={<Login />}/>
          <Route path="/login/sign_up" element={<Signup />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/user_profile/:id" element={<UserProfile />}/>
          <Route path="/my_profile" element={<MyProfile />}/>
          <Route path="/profile_edit" element={<ProfileEdit />}/>
          <Route path="/product_upload" element={<ProductUpload />}/>
          <Route path="/post/:id" element={<Post />}/>
          <Route path="/post_upload" element={<PostUpload />}/>
          <Route path="/chat" element={<Chat />}/>
          <Route path="/chat/:id" element={<ChatRoom />}/>
          <Route path="/not_found" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
export default App;
