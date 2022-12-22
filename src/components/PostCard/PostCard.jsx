import React from 'react';
import { Link } from 'react-router-dom';
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

export default function PostCard({ post, author }) {
  const accountName = author.accountname;
  const postDate =
    post.createdAt !== post.updatedAt
      ? post.updatedAt.slice(0, 10).replaceAll('-', '')
      : post.createdAt.slice(0, 10).replaceAll('-', '');
  const year = postDate.slice(0, 4);
  const month = postDate.slice(4, 6);
  const date = postDate.slice(6, 8);

  return (
    <PostAccountLiStyle>
      <Link to={`/user_profile/${accountName}`}>
        <PostProfileDivStyle>
          <ProfileImgAccount
            width="42px"
            margin="0 0 0 12px"
            namemarginbottom="2px"
            username={post.author.username}
            usertext={`@ ${post.author.accountname}`}
            src={post.author.image}
          />
          <PostIconMoreStyle />
        </PostProfileDivStyle>
      </Link>
      <PostDivStyle>
        <PostContentsStyle>{post.content}</PostContentsStyle>
        <PostImgStyle src={[post.img]} alt="" />
        <PostCountDivStyle>
          <HeartIcon heartCount={post.heartCount} />
          <CommentIcon commentCount={post.commentCount} />
        </PostCountDivStyle>
        <PostDateStyle>{`${year}년 ${month}월 ${date}일`}</PostDateStyle>
      </PostDivStyle>
    </PostAccountLiStyle>
  );
}
