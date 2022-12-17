import React from 'react';
import PostImg from '../../assets/img/unsplash_FWtiv70Z_ZY.png';
import HeartIcon from '../HearIcon/HeartIcon';
import CommentIcon from '../CommentsIcon/CommentIcon';
import ProfileImgAccount from '../ProfileImgAccount/ProfileImgAccount';
import {
  PostAccountLiStyle,
  PostProfileDivStyle,
  PostIconMoreStyle,
  PostDivStyle,
  PostContentsStyle,
  PostImgStyle,
  PostCountDivStyle,
  PostDateStyle,
} from './PostCardStyle';

export default function PostCard() {
  return (
    <PostAccountLiStyle>
      <PostProfileDivStyle>
        <ProfileImgAccount
          width="42px"
          margin="0 0 0 12px"
          namemarginbottom="2px"
          username="풍이네 주말농장"
          usertext="@sunday_farm"
        />
        <PostIconMoreStyle />
      </PostProfileDivStyle>
      <PostDivStyle>
        <PostContentsStyle>
          요즘 바빠서 오랜만에 농장에 왔습니다! 정리해야 할 것 들이
          한가득이네요. 오늘도 힘내서 채소들 가꾸고 가보겠습니다. 이웃분들도
          즐거운 주말 보내세요. 다들 일교차 감기 조심하세요!
        </PostContentsStyle>
        <PostImgStyle src={PostImg} alt="" />
        <PostCountDivStyle>
          <HeartIcon />
          <CommentIcon />
        </PostCountDivStyle>
        <PostDateStyle>2022년 12월 21일</PostDateStyle>
      </PostDivStyle>
    </PostAccountLiStyle>
  );
}
