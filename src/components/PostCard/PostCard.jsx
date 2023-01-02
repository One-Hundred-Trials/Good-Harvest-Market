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
  PostCarouselStyle,
  PostCarouselContStyle,
  PostCarouselBtnsContStyle,
  PostCarouselBtnStyle,
  PostImgStyle,
  PostCountDivStyle,
  PostDateStyle,
} from './PostCardStyle';

export default function PostCard({ post, author }) {
  const userAccount = useRecoilValue(accountAtom);
  const [slidePx, setSlidePx] = useState(0);
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

  const imgNum = post.image?.split(',');
  const prevBtn = () => {
    if (slidePx < 0) setSlidePx(slidePx + 304);
  };
  const nextBtn = () => {
    if (imgNum.length === 2 && slidePx > -304) {
      setSlidePx(slidePx - 304);
    } else if (imgNum.length === 3 && slidePx > -608) {
      setSlidePx(slidePx - 304);
    }
  };

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
          <PostCarouselStyle>
            <PostCarouselContStyle transform={slidePx}>
              {post.image
                ? imgNum.map((ImgUrl, index) => (
                    <div key={index}>
                      {' '}
                      <PostImgStyle src={ImgUrl} alt="" />{' '}
                    </div>
                  ))
                : null}
            </PostCarouselContStyle>
            {imgNum?.length > 1 ? (
              <PostCarouselBtnsContStyle>
                <PostCarouselBtnStyle onClick={prevBtn}>
                  &#xE000;
                </PostCarouselBtnStyle>
                <PostCarouselBtnStyle onClick={nextBtn}>
                  &#xE001;
                </PostCarouselBtnStyle>
              </PostCarouselBtnsContStyle>
            ) : null}
          </PostCarouselStyle>
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
