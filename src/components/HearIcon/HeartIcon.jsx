import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import API from '../../API';
import HeartOff from '../../assets/img/icon-heart.png';
import HeartOn from '../../assets/img/icon-heart-on.png';

import { authAtom } from '../../_state/auth';

const HeartStyle = styled.span`
  display: flex;
  align-items: center;
  gap: 7.82px;
  color: var(--main-grey-76);
`;

const HeartImgStyle = styled.img`
  width: 16.36px;
  height: 14.55px;
`;

export default function HeartIcon({
  heartCount,
  like,
  postId,
  setLike,
  setLikeCount,
}) {
  // const [like, setLike] = useState(hearted);
  // const [likeCount, setLikeCount] = useState(heartCount);
  const auth = useRecoilValue(authAtom);
  // console.log(postId);

  const heartOnHandler = async () => {
    try {
      const res = await API.post(`/post/${postId}/heart`, JSON.stringify(), {
        headers: {
          Authorization: `Bearer ${auth}`,
          'Content-type': 'application/json',
        },
      });
      const { post } = res.data;
      setLike(post.hearted);
      setLikeCount(post.heartCount);
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
      const res = await API.delete(`/post/${postId}/unheart`, {
        headers: {
          Authorization: `Bearer ${auth}`,
          'Content-type': 'application/json',
        },
      });
      const { post } = res.data;
      setLike(post.hearted);
      setLikeCount(post.heartCount);
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
