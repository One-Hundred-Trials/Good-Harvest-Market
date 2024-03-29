import React from 'react';
import postLiked from 'api/Post/postLiked';
import deleteLiked from 'api/Post/deleteLiked';
import HeartOff from 'assets/img/icon-heart.svg';
import HeartOn from 'assets/img/icon-heart-on.svg';
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
