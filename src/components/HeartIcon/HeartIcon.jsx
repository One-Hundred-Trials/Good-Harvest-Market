import React from 'react';
import postLiked from '../../api/Feed/postLiked';
import deleteLiked from '../../api/Feed/deleteLiked';
import HeartOff from '../../assets/img/icon-heart.png';
import HeartOn from '../../assets/img/icon-heart-on.png';
import { HeartStyle, HeartImgStyle } from './HeartIconStyle';

export default function HeartIcon({
  heartCount,
  like,
  postId,
  setLike,
  setLikeCount,
}) {
  const heartOnHandler = async () => {
    try {
      const res = await postLiked(postId);
      setLike(res.post.hearted);
      setLikeCount(res.post.heartCount);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  const heartOffHandler = async () => {
    try {
      const res = await deleteLiked(postId);
      console.log(res);
      setLike(res.post.hearted);
      setLikeCount(res.post.heartCount);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  const handleClick = () => {
    setLike((prev) => !prev);
    if (like) {
      heartOffHandler();
    } else {
      heartOnHandler();
    }
  };

  return (
    <HeartStyle onClick={handleClick}>
      <HeartImgStyle src={like ? HeartOn : HeartOff} alt="" />
      <span>{heartCount}</span>
    </HeartStyle>
  );
}
