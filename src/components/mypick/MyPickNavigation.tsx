'use client';
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import sub from '@/assets/images/subscription.png';

function MyPickNavigation() {
  const router = useRouter();
  const [selectedPage, setSelectedPage] = useState('마이픽 현황');

  return (
    <Container>
      <Banner src={sub.src} />
      <Semicontainer>
        <Menu>
          <Section>
            <Option
              onClick={() => {
                setSelectedPage('마이픽 현황');
                router.push('/myPick');
              }}
              selected={selectedPage === '마이픽 현황' ? true : false}
            >
              마이픽 현황
              {selectedPage === '마이픽 현황' ? <SelectedPage /> : <></>}
            </Option>
          </Section>

          <Section>
            <Option
              onClick={() => {
                setSelectedPage('홈피팅');
                router.push('/myPick/homefitting');
              }}
              selected={selectedPage === '홈피팅' ? true : false}
            >
              홈피팅
              {selectedPage === '홈피팅' ? <SelectedPage /> : <></>}
            </Option>
          </Section>

          <Section>
            <Option
              onClick={() => {
                setSelectedPage('구매하기');
                router.push('');
              }}
              selected={selectedPage === '구매하기' ? true : false}
            >
              구매하기
              {selectedPage === '구매하기' ? <SelectedPage /> : <></>}
            </Option>
          </Section>

          <Section>
            <Option
              onClick={() => {
                setSelectedPage('구매내역');
                router.push('/myPick/purchase');
                //여기 url 못 찾음
              }}
              selected={selectedPage === '구매내역' ? true : false}
            >
              구매내역
              {selectedPage === '구매내역' ? <SelectedPage /> : <></>}
            </Option>
          </Section>
        </Menu>
        <Pick>
          <Title>내가 픽한제품</Title>
          <Filter>
            <OnlyProduct>홈피팅 신청 중 제품만</OnlyProduct>
            <Clear>전체 선택 해제</Clear>
          </Filter>
        </Pick>
      </Semicontainer>
    </Container>
  );
}

export default MyPickNavigation;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 125px;
  padding-right: 117px;
`;
const Section = styled.div``;
const Option = styled.div<{ selected: boolean }>`
  font-size: 16px;
  font-weight: ${(props) => (props.selected ? '600' : '400')};
  color: ${(props) =>
    props.selected ? 'var(--1, #111);' : 'var(--2, #5F5F5F);'};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 133.5px;
`;
const SelectedPage = styled.div`
  width: 133.5px;
  height: 3px;
  background-color: var(--1, #111);
  margin-top: 22px;
`;
const Pick = styled.div`
  width: 1216px;
  margin-top: 81px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
const Filter = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: var(--2, #5f5f5f);
  display: flex;
`;
const OnlyProduct = styled.div``;
const Clear = styled.div`
  margin-left: 54px;
`;
const Banner = styled.img`
  width: 1644px;
  height: 134px;
  border-radius: 15px;
  margin-top: 62px;
  margin-bottom: 25px;
`;

const Semicontainer = styled.div`
  width: 1216px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
