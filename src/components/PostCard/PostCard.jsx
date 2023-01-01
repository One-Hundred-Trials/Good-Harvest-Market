import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { accountAtom } from '../../_state/auth';
import HeartIcon from '../HearIcon/HeartIcon';
import CommentIcon from '../CommentsIcon/CommentIcon';
import ProfileImgAccount from '../ProfileImgAccount/ProfileImgAccount';
import PostModal from '../../components/Modal/PostModalAlert/PostModal';
import PostReportModal from '../../components/Modal/PostModalAlert/PostReportModal';
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
  const userAccount = useRecoilValue(accountAtom);
  const [modal, setModal] = useState(false);
  const modalUp = () => {
    setModal(true);
  };
  const accountName = author.accountname;
  const postDate =
    post.createdAt !== post.updatedAt
      ? post.updatedAt?.slice(0, 10).replaceAll('-', '')
      : post.createdAt?.slice(0, 10).replaceAll('-', '');
  const year = postDate?.slice(0, 4);
  const month = postDate?.slice(4, 6);
  const date = postDate?.slice(6, 8);

  return (
    <>
      <PostAccountLiStyle>
        <PostProfileDivStyle>
          <Link
            to={
              userAccount === accountName
                ? `/my_profile/${accountName}`
                : `/user_profile/${accountName}`
            }
          >
            <ProfileImgAccount
              width="42px"
              height="42px"
              margin="0 0 0 12px"
              namemarginbottom="3px"
              post={post}
              author={author}
              username={author.username}
              accountname={author.accountname}
              image={author.image}
            />
          </Link>
          <PostIconMoreStyle onClick={modalUp} />
        </PostProfileDivStyle>

        <PostDivStyle>
          <PostContentsStyle>{post.content}</PostContentsStyle>
          {post.image ? <PostImgStyle src={post.image} alt="" /> : null}
          <PostCountDivStyle>
            <HeartIcon heartCount={post.heartCount} />
            <Link to={`/post/${post.id}`}>
              <CommentIcon commentCount={post.commentCount} />
            </Link>
          </PostCountDivStyle>
          <PostDateStyle>{`${year}년 ${month}월 ${date}일`}</PostDateStyle>
        </PostDivStyle>
      </PostAccountLiStyle>
      {modal && (
        <>
          {userAccount === accountName ? (
            <PostModal postId={post.id} setModal={setModal} />
          ) : (
            <PostReportModal postId={post.id} setModal={setModal} />
          )}
        </>
      )}
    </>
  );
}
