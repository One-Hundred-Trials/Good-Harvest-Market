import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import MetaDatas from 'components/MetaDatas/MetaDatas';
import PostCard from 'components/PostCard/PostCard';
import Comment from 'components/Comment/Comment';
import CommentInput from 'components/CommentInput/CommentInput';
import Header from 'components/common/Header/Header';
import Loading from 'pages/Loading/Loading';
import getComment from 'api/Comment/getComment';
import getPost from 'api/Post/getPost';
import {
  PageWrapStyle,
  ConWrapStyle,
  PostCardUlCont,
  CommentContainerStyle,
} from './PostStyle';

export default function Post() {
  const auth = JSON.parse(localStorage.getItem('auth'));
  const { id } = useParams();
  const [postData, setPostData] = useState('');
  const [postAuthor, setPostAuthor] = useState('');
  const [commentsList, setCommentsList] = useState('');

  useEffect(() => {
    const GetPost = async () => {
      const res = await getPost(id);
      const { post } = res;
      setPostData(post);
      const { author } = res.post;
      setPostAuthor(author);
    };
    GetPost();
  }, [auth, id]);

  const postCommentList = useCallback(async () => {
    const res = await getComment(id);
    const commentData = res.comments;
    setCommentsList(commentData);
  }, [id]);

  useEffect(() => {
    postCommentList();
  }, [postCommentList]);

  if (!postData) return <Loading />;
  else {
    return (
      <>
        <MetaDatas
          title={'게시글'}
          desc={'풍년마켓에서 이웃들의 소식 확인하기'}
        />
        <PageWrapStyle>
          <Header id={id} />
          <ConWrapStyle>
            <PostCardUlCont>
              <PostCard post={postData} author={postAuthor} />
            </PostCardUlCont>
            <CommentContainerStyle>
              {commentsList ? (
                commentsList
                  .map((comment) => (
                    <Comment
                      key={comment.id}
                      comment={comment}
                      postId={id}
                      updateDeleteComment={postCommentList}
                    />
                  ))
                  .reverse()
              ) : (
                <p>첫번째 댓글을 달아보세요!</p>
              )}
            </CommentContainerStyle>
          </ConWrapStyle>
          <CommentInput upDateComment={postCommentList} />
        </PageWrapStyle>
      </>
    );
  }
}
