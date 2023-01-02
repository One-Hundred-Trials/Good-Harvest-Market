import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../../../_state/auth';
import API from '../../../API';
import { PageWrap, ConWrap } from '../../../styles/GlobalStyles';
import PostCard from '../../../components/PostCard/PostCard';
import Comment from '../../../components/Comment/Comment';
import CommentInput from '../../../components/CommentInput/CommentInput';
import Header from '../../../components/Header/Header';
import Loading from '../../Loading/Loading';

const PageWrapStyle = styled.div`
  ${PageWrap}
`;

const ConWrapStyle = styled.main`
  ${ConWrap}
`;

const PostCardUlCont = styled.ul`
  padding: 20px 16px;
`;

const CommentContainerStyle = styled.div`
  padding: 20px 16px;
  border-top: 1px solid var(--sub-grey-C4);
`;

export default function Post() {
  const auth = useRecoilValue(authAtom);
  const { id } = useParams();
  const [postData, setPostData] = useState('');
  const [postAuthor, setPostAuthor] = useState('');
  const [commentsList, setCommentsList] = useState('');

  useEffect(() => {
    const GetPost = async () => {
      try {
        const res = await API.get(`/post/${id}`, {
          headers: {
            Authorization: `Bearer ${auth}`,
            'Content-type': 'application/json',
          },
        });
        const { post } = res.data;
        setPostData(post);
        const { author } = res.data.post;
        setPostAuthor(author);
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
    GetPost();
  }, [auth, id]);

  const postCommentList = async () => {
    try {
      const res = await API.get(`/post/${id}/comments`, {
        headers: {
          Authorization: `Bearer ${auth}`,
          'Content-type': 'application/json',
        },
      });
      const commentData = res.data.comments;
      setCommentsList(commentData);
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
  useEffect(() => {
    postCommentList();
  }, []);

  if (!postData) return <Loading />;
  else {
    return (
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
                    deleteComment={postCommentList}
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
    );
  }
}
