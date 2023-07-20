'use client';
import React from 'react';
import styled from 'styled-components';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';
import SelectPlan from '@/components/mypage/SelectPlan';
import { selectedSubscribePlan } from '@/atom/states';
import { useRecoilState } from 'recoil';
import getAccessToken from '@/util/getAccessToken';
import { getIsSubscribe } from '@/api/requests';
import { useCookies } from 'react-cookie';

function page() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [selectPlan, setSelectPlan] = useRecoilState(selectedSubscribePlan);

  console.log(selectPlan);

  const checkIsSubscribe = async () => {
    let accessToken = await getAccessToken(cookies, setCookie);
    const response = await getIsSubscribe(accessToken);

    if (response == selectPlan) {
      alert('현재 구독 중인 플랜입니다.');
    } else {
      router.push('/mypage/subscribe/request');
    }
  };

  return (
    <Container>
      <Title>{'리픽 멤버십 구독 플랜'}</Title>
      <SemiTitle>
        {'리픽 멤버십 구독을 통해 온라인 제품을 홈피팅 후 옷을 구매해보세요!'}
      </SemiTitle>
      <Wrapper>
        <Choice>
          <SelectPlan
            check={'BASIC'}
            plan={'Basic Plan'}
            price={'15,900원'}
            percent={'40%'}
            discounted={'월 9,540원'}
          />
        </Choice>
        <Choice>
          <SelectPlan
            check={'PRO'}
            plan={'Pro Plan'}
            price={'25,900원'}
            percent={'60%'}
            discounted={'월 15,540원'}
          />
        </Choice>
      </Wrapper>
      <div className="button" onClick={() => checkIsSubscribe()}>
        <Button content="구독하기" num="4" />
      </div>
    </Container>
  );
}

export default page;

const Container = styled.div`
  .button {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 148px;
  }
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  margin-top: 120px;
  text-align: center;
`;
const SemiTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;
const Choice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;
`;
const Off = styled.img`
  margin-bottom: 24px;
`;
const On = styled.img`
  margin-bottom: 24px;
`;
const Wrapper = styled.div`
  display: flex;
  // justify-content: space-between;
  margin-top: 60px;
`;
const Check = styled.div``;
