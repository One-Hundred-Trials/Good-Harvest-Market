import React from 'react';
import PostCard from '../../../components/PostCard/PostCard';
import MyProfile from '../Profile/MyProfile/MyProfile';

export default function Home() {
  return (
    <div>
      <MyProfile />
      <PostCard />
      Home
    </div>
  );
}
