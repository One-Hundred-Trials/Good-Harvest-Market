import React from 'react';
import postLiked from 'api/Feed/postLiked';
import deleteLiked from 'api/Feed/deleteLiked';
import HeartOff from 'assets/img/icon-heart.png';
import HeartOn from 'assets/img/icon-heart-on.png';
import { HeartStyle, HeartImgStyle } from './HeartIconStyle';

export default function HeartIcon({
  postId,
  like,
  heartCount,
  setLike,
  setLikeCount,
}) {
  const heartOnHandler = async () => {
    const res = await postLiked(postId);
    setLike(res.post.hearted);
    setLikeCount(res.post.heartCount);
  };

  const heartOffHandler = async () => {
    const res = await deleteLiked(postId);
    setLike(res.post.hearted);
    setLikeCount(res.post.heartCount);
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
