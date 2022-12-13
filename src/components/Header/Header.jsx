import React from 'react';
import styled from 'styled-components';
import iconArrowLeft from '../../assets/img/icon-arrow-left.png';
import iconMore from '../../assets/img/icon-more-18.png';
import iconSearch from '../../assets/img/icon-search.png';

const TopBasicNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;
  padding: 12px 16px;
`;
const TopSearchNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;
  padding: 8px 16px;
  gap: 20px;
`;
const TopSearchInput = styled.input`
  width: calc(100% - 32px);
  height: 32px;
  color: #c4c4c4;
  background: #f2f2f2;
  border-radius: 32px;
  border: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: flex-end;
  padding: 7px 16px;
`;
const TopMainNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;
  padding: 13px 16px;
`;
const TopMainH3 = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: flex-end;
  color: #000000;
`;
const TopUploadNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;
  padding: 8px 16px;
`;
const TopChatNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;
  padding: 12px 16px;
  gap: 10px;
`;
const TopChatH4 = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: flex-end;
  color: #000000;
`;
const TopChatWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function Header() {
  return (
    <>
      <TopBasicNav>
        <button>
          <img src={iconArrowLeft} alt="뒤로가기" height="22" />
        </button>
        <button>
          <img src={iconMore} alt="더보기" height="22" />
        </button>
      </TopBasicNav>
      <TopSearchNav>
        <button>
          <img src={iconArrowLeft} alt="뒤로가기" height="22" />
        </button>
        <TopSearchInput type="text" placeholder="계정 검색" />
      </TopSearchNav>
      <TopMainNav>
        <TopMainH3>주말의 즐거운 풍년마켓</TopMainH3>
        <button>
          <img src={iconSearch} alt="검색하기" height="22" />
        </button>
      </TopMainNav>
      <TopUploadNav>
        <button>
          <img src={iconArrowLeft} alt="뒤로가기" height="22" />
        </button>
      </TopUploadNav>
      <TopChatNav>
        <TopChatWrap>
          <button>
            <img src={iconArrowLeft} alt="뒤로가기" height="22" />
          </button>
          <TopChatH4>풍이의 주말농장</TopChatH4>
        </TopChatWrap>
        <button>
          <img src={iconMore} alt="더보기" height="22" />
        </button>
      </TopChatNav>
    </>
  );
}
