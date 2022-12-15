import React from 'react';
import styled from 'styled-components';
import ProfileAccount from '../ProfileAccount/ProfileAccount';
import ProfileImg from '../../assets/img/basic-profile-50.png';
import PostImg from '../../assets/img/unsplash_FWtiv70Z_ZY.png';
import HeartIcon from '../HearIcon/HeartIcon';
import CommentIcon from '../CommentsIcon/CommentIcon';

const PostProfileImg = styled.img`
  width: 42px;
  height: 42px;
`;

const PostAccountLiStyle = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const PostContentsStyle = styled.p`
  margin: 16px 0px;
  line-height: 1.8rem;
  font-weight: 400;
  font-size: 1.4rem;
`;

const PostImgStyle = styled.img`
  margin-bottom: 15px;
`;

const PostDivStyle = styled.div`
  display: flex;
  gap: 18.5px;
`;

const PostDateStyle = styled.p`
  margin: 19px 0px;
  color: var(--main-grey-76);
`;

export default function PostCardList() {
  return (
    <PostAccountLiStyle>
      <PostProfileImg src={ProfileImg} alt="" />
      <div>
        <ProfileAccount
          size="1.4rem"
          margin="0"
          align="flex-start"
          marginbottom="2px"
          margintop="8px"
        />
        <PostContentsStyle>
          요즘 바빠서 오랜만에 농장에 왔습니다! 정리해야 할 것 들이
          한가득이네요. 오늘도 힘내서 채소들 가꾸고 가보겠습니다. 이웃분들도
          즐거운 주말 보내세요. 다들 일교차 감기 조심하세요!
        </PostContentsStyle>
        <PostImgStyle src={PostImg} alt="" />
        <PostDivStyle>
          <HeartIcon />
          <CommentIcon />
        </PostDivStyle>
        <PostDateStyle>2022년 12월 21일</PostDateStyle>
      </div>
    </PostAccountLiStyle>
  );
}
