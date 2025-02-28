'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { styled, css, keyframes } from 'styled-components';
import small_logo from '@/assets/images/guide/small_logo.svg';
import ContentBodyInfo from '@/components/guide/ContentBodyInfo';
import { useRouter } from 'next/navigation';
import { getMainPageProducts } from '@/api/requests';
import guide_first from '@/assets/images/guide/guide_first.png';
import guide_second from '@/assets/images/guide/guide_second.png';
import guide_third from '@/assets/images/guide/guide_third.png';
import guide_fourth from '@/assets/images/guide/guide_fourth.png';
import character_2 from '@/assets/images/guide/character_2.png';
import character_4 from '@/assets/images/guide/character_4.png';
import character_5 from '@/assets/images/guide/character_5.png';
import presents from '@/assets/images/guide/presents.png';
import banner2 from '@/assets/images/banner/banner2.png';
import SubBackground from '@/assets/images/guide/SubBackground.png';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { selectedNavPage } from '@/atom/states';
import { useRecoilState } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { flexCenter, flexColumn } from '@/styles/theme';
type SlideInDivProps = {
  inview: string;
};
function page() {
  const router = useRouter();
  const [products, setProducts] = useState<any[]>([]);
  const hi = 'S';

  const responsive = {
    512: {
      items: 4,
    },
  };
  const {
    ref: ref,
    inView: inView,
    entry: entry,
  } = useInView({
    triggerOnce: true,
  });

  const responsiveBanner = {
    512: {
      items: 1,
    },
  };
  const handleDragStart = (e: { preventDefault: () => any }) =>
    e.preventDefault();
  useEffect(() => {
    const get = async () => {
      const response = await getMainPageProducts();

      const clothes = response.map((item: any) => {
        return item;
      });
      setProducts(clothes);
    };

    get();
  }, []);
  const items = products.map((item) => {
    return (
      <div
        onClick={() => router.push(`/product/detail/${item.productId}`)}
        key={item.productId}
      >
        <ContentBodyInfo
          key={item.productId}
          src={item.mainImageFile.imagePath}
          tagName={item.brand}
          size={item.size}
          name={item.name}
          price={item.price}
        />
      </div>
    );
  });
  const [selectedPage, setSelectedPage] = useRecoilState(selectedNavPage);
  const goProduct = () => {
    setSelectedPage('제품 보기');
    router.push('/product');
  };
  const goWardrobe = () => {
    setSelectedPage('옷장 정리');
    router.push('/wardrobe');
  };
  return (
    <Contents>
      {/* <BannerWrapper>
      <BannerWrapper>
        {/* <AliceCarousel
          mouseTracking
          infinite={true}
          animationDuration={1000}
          disableDotsControls
          disableButtonsControls
          responsive={responsiveBanner}
          autoPlay
          items={bannerItems}
        /> */}
      {/* <Image
          src={banner2}
          alt="Picture of me"
          style={{ width: '100vw', height: 'auto' }}
          placeholder="blur"
        />
      </BannerWrapper> */}
      {/* <Section1>
        <ContentWrapper.left>
          <Content.Title>
            <Image
              src={small_logo}
              alt="Small Logo"
              style={{ width: '31px', height: '31px' }}
              // placeholder ="blur"
            />
            <Content.TitleText>Repick Service</Content.TitleText>
          </Content.Title>
          <Content.Sub>
            부담없이 집에서 직접<br></br>입어보고 결제하세요
          </Content.Sub>
        </ContentWrapper.left>
        <ContentWrapper.center>
          <Content.NumberWrapper>
            <Content.Number>❶</Content.Number>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="328"
              height="2"
              viewBox="0 0 328 2"
              fill="none"
            >
              <path d="M0.5 1H328" stroke="black" strokeDasharray="5 5" />
            </svg>
            <Content.Number>❷</Content.Number>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="328"
              height="2"
              viewBox="0 0 328 2"
              fill="none"
            >
              <path d="M0.5 1H328" stroke="black" strokeDasharray="5 5" />
            </svg>
            <Content.Number>❸</Content.Number>
          </Content.NumberWrapper>
          <Content.IntroWrapper>
            <Content.IntroItem>
              <Image
                src={guide_first}
                alt="guide_first"
                style={{ width: '344px', height: 'auto' }}
                // placeholder ="blur"
              />
              <Content.IntroWrapP>
                <Content.IntroP>
                  리픽의 옷들은 엄격한 검수 기준과<br></br>살균 처리 과정을 거쳐
                  선정돼요
                </Content.IntroP>
              </Content.IntroWrapP>
            </Content.IntroItem>
            <Content.IntroItem>
              <Image
                src={guide_second}
                alt="guide_second"
                style={{ width: '344px', height: 'auto' }}
                // placeholder ="blur"
              />
              <Content.IntroWrapP>
                <Content.IntroP>
                  새 옷처럼 개별 포장되어<br></br>배송이 시작돼요
                </Content.IntroP>
              </Content.IntroWrapP>
            </Content.IntroItem>
            <Content.IntroItem>
              <Image
                src={guide_third}
                alt="guide_third"
                style={{ width: '344px', height: 'auto' }}
                // placeholder ="blur"
              />
              <Content.IntroWrapP>
                <Content.IntroP>
                  직접 입어 보고 마음에 드는 옷들만 골라 구매하세요<br></br>
                  나머지 옷들은 그대로 다시 반품할 수 있어요
                </Content.IntroP>
              </Content.IntroWrapP>
            </Content.IntroItem>
          </Content.IntroWrapper>
        </ContentWrapper.center>
      </Section1> */}
      <Section2>
        <ContentWrapper.SpaceBetween>
          <LogoWrapper>
            <Image
              src={guide_fourth}
              alt="guide_fourth"
              style={{ width: '428px', height: 'auto' }}
              // placeholder ="blur"
            />
            <Character._2>
              <Image
                src={character_2}
                alt="character_2"
                style={{ width: '109px', height: '129px' }}
                // placeholder ="blur"
              />
            </Character._2>
          </LogoWrapper>
          <ContentWrapper.right>
            <Content.Title>
              <Image
                src={small_logo}
                alt="Small Logo"
                style={{ width: '31px', height: '31px' }}
                // placeholder ="blur"
              />
              <Content.TitleText>Repick Service</Content.TitleText>
            </Content.Title>
            <Content.SubRight>
              빠르고 편리하게<br></br>나의 옷들을 판매해보세요!
            </Content.SubRight>
            <Content.Description>
              정리하고싶은 옷들을 문 밖에 두기만 하면<br></br>
              수거, 촬영, 살균 후 판매까지 리픽이 모두 알아서 처리해요!
            </Content.Description>
          </ContentWrapper.right>
        </ContentWrapper.SpaceBetween>
      </Section2>
      <WardrobeBtn onClick={goWardrobe}>
        <WardrobeP>옷장 정리하러 가기</WardrobeP>
      </WardrobeBtn>
      {/* <BannerWrapper2>
        <Image
          src={slogan_1}
          alt="Slogan_1"
          style={{ width: '100%', height: 'auto' }}
          placeholder="blur" 
        />          
      </BannerWrapper2>
      <Section3>
        <ContentWrapper.center>
          <Content.Title>
            <Image
              src = {small_logo}
              alt="Small Logo"
              style = {{width:'auto',height:'auto'}}
              // placeholder ="blur"
            />
            <Content.TitleText>
              Service Point
            </Content.TitleText>
          </Content.Title>
          <Content.Sub>
          팔리지 않은 옷들은 판매자 님의 이름으로 기부 됩니다.
          </Content.Sub>
          <Content.Description_Center>
          제휴 업체를 통해 기부가 이루어지며 판매자 님의 이름으로 영수증이 발급돼요.<br></br>옷 돌려받기 또한 신청하실 수 있어요!
          </Content.Description_Center>
        </ContentWrapper.center>
        <ContentWrapper.basic>
          <Image
            src = {character_3}
            alt="character_3"
            style = {{width:'320px',height:'auto'}}
            // placeholder ="blur"
          />
          <Image
            src = {guide_second}
            alt="guide_second"
            style = {{width:'auto',height:'auto',position:'relative',top:'-70px'}}
            // placeholder ="blur"
          />
        </ContentWrapper.basic>
      </Section3> */}

      {/* <Section4>
        <SubCard.Img>
          <Image
            src={SubBackground}
            alt="Small Logo"
            style={{ width: '100%', height: '100%' }}
            // placeholder ="blur"
          />
        </SubCard.Img>
        <ContentWrapper.left>
          <Content.Title>
            <Image
              src={small_logo}
              alt="Small Logo"
              style={{ width: '31px', height: '31px' }}
              // placeholder ="blur"
            />
            <Content.TitleText>Subscription</Content.TitleText>
          </Content.Title>
          <Content.Sub_White>리픽 구독자를 위한 특별 혜택!</Content.Sub_White>
          <Content.Description_Left_White>
            리픽을 구독하고 온라인 쇼핑에선 만나볼 수 없었던 홈피팅의 기회를
            누려보세요.<br></br>리픽에서는 배달 추가금 0원으로 부담없는 반품과
            배송이 가능해요!
          </Content.Description_Left_White>
        </ContentWrapper.left>
        <SubCard.Wrapper>
          <SubCard.Card>
            <AnimatedSection1 ref={ref} inview={inView.toString()}>
              <SubCard.Title>Basic Plan</SubCard.Title>
            </AnimatedSection1>
            <AnimatedSection2 ref={ref} inview={inView.toString()}>
              <SubCard.CostDiscounted>15,900원</SubCard.CostDiscounted>
              <SubCard.Discount>40%</SubCard.Discount>
            </AnimatedSection2>
            <AnimatedSection3 ref={ref} inview={inView.toString()}>
              <SubCard.TotalCost>
                월 9,540원
                <SubCard.Vat>(부가세 포함)</SubCard.Vat>
              </SubCard.TotalCost>
            </AnimatedSection3>

            <AnimatedSection4 ref={ref} inview={inView.toString()}>
              <SubCard.Description>
                홈피팅 시 3벌의 의류를 선택 가능합니다.*<br></br>추가로 결제되는
                금액은 없습니다.*
              </SubCard.Description>
            </AnimatedSection4>

            <Image
              src={character_4}
              alt="character_4"
              style={{
                width: '103px',
                height: '124px',
                position: 'absolute',
                left: '-59px',
                bottom: '-52px',
              }}
            />
          </SubCard.Card>
          <SubCard.Card>
            <AnimatedSection5 ref={ref} inview={inView.toString()}>
              <SubCard.Title>Pro Plan</SubCard.Title>
            </AnimatedSection5>
            <AnimatedSection6 ref={ref} inview={inView.toString()}>
              <SubCard.CostDiscounted>25,900원</SubCard.CostDiscounted>
              <SubCard.Discount>60%</SubCard.Discount>
            </AnimatedSection6>
            <AnimatedSection7 ref={ref} inview={inView.toString()}>
              <SubCard.TotalCost>
                월 15,540원
                <SubCard.Vat>(부가세 포함)</SubCard.Vat>
              </SubCard.TotalCost>
            </AnimatedSection7>

            <AnimatedSection8 ref={ref} inview={inView.toString()}>
              <SubCard.Description>
                홈피팅 시 5벌의 의류를 선택 가능합니다.*<br></br>추가로 결제되는
                금액은 없습니다.*
              </SubCard.Description>
            </AnimatedSection8>

            <Image
              src={character_5}
              alt="character_5"
              style={{
                width: '209px',
                height: '262px',
                position: 'absolute',
                top: '-196px',
                right: '-37px',
                transform: 'rotate(4.776deg)',
              }}
              // placeholder ="blur"
            />

            <Image
              src={presents}
              alt="presents"
              style={{
                width: 'auto',
                height: 'auto',
                position: 'absolute',
                bottom: '-42px',
                right: '-112px',
              }}
              // placeholder ="blur"
            />
          </SubCard.Card>
        </SubCard.Wrapper>
      </Section4> */}
      <Section5>
        <ContentWrapper.center>
          <Content.Title>
            <Image
              src={small_logo}
              alt="Small Logo"
              style={{ width: '31px', height: '31px' }}
              // placeholder ="blur"
            />
            <Content.TitleText>Shopping</Content.TitleText>
          </Content.Title>
          <Content.Sub>리픽에 다양한 제품들이 기다리고 있어요!</Content.Sub>
          <ContentWaiting>
            <ContentWaitingInfoWrapper>
              <ContentWaitingInfoItemWrapper>
                <AliceCarousel
                  mouseTracking
                  infinite={true}
                  animationDuration={1000}
                  disableDotsControls
                  disableButtonsControls
                  responsive={responsive}
                  autoPlay
                  items={items}
                />
              </ContentWaitingInfoItemWrapper>
            </ContentWaitingInfoWrapper>
          </ContentWaiting>
          <PurchaseButton onClick={goProduct}>
            <PurchaseP>리픽 제품 구매하러 가기</PurchaseP>
          </PurchaseButton>
        </ContentWrapper.center>
      </Section5>
    </Contents>
  );
}

export default page;

const WardrobeBtn = styled.div`
  ${flexCenter}
  width: 495.5px;
  height: 20px;
  overflow: hidden;
  padding: 45.406px 75.677px;
  border-radius: 28.379px;
  background: ${(props) => props.theme.colors.black};
  flex-direction: column;
  gap: 18.919px;
  cursor: pointer;
  margin-top: 20px;
`;
const WardrobeP = styled.div`
  color: ${(props) => props.theme.colors.lightgray};
  font-family: Pretendard;
  font-size: 30.271px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
`;
const Contents = styled.div`
  ${flexColumn}
  align-items: center;
  text-align: center;
`;
const BannerWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  font-size: 0;
  position: relative;
`;
const BannerWrapper2 = styled.div`
  width: 100%;
  font-size: 0;
  position: relative;
`;

const ContentWrapper = {
  left: styled.div`
    width: 1216px;
    ${flexColumn}
  `,
  center: styled.div`
    width: 1216px;
    ${flexCenter}
    flex-direction: column;
  `,
  right: styled.div`
    ${flexColumn}
    align-items: end;
    margin-top: 40px;
  `,
  SpaceBetween: styled.div`
    width: 1216px;
    display: flex;
    justify-content: space-between;
  `,
  basic: styled.div`
    width: 1216px;
    ${flexCenter}
  `,
};
const ContentWaiting = styled.div`
  width: 100%;
  overflow: auto;
  margin-top: 60px;
  margin-bottom: 148px;
`;

const ContentWaitingInfoWrapper = styled.div`
  ${flexColumn}
  gap: 60px;
`;

const ContentWaitingInfoHeader = styled.div`
  color: #111;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const ContentWaitingInfoItemWrapper = styled.div`
  ${flexCenter}
  gap: 24px;
`;

const Section1 = styled.div`
  height: 936px;
  ${flexColumn}
  align-items : center;
  justify-content: center;
  gap: 50px;
`;

const Content = {
  Title: styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  `,
  TitleText: styled.p`
    color: ${(props) => props.theme.colors.main};
    font-feature-settings:
      'clig' off,
      'liga' off;
    /* Header3 24pt sb */
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 36px */
  `,
  Sub: styled.p`
    text-align: left;
    color: ${(props) => props.theme.colors.black};
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    font-feature-settings:
      'clig' off,
      'liga' off;
  `,
  Sub_White: styled.p`
    text-align: left;
    color: ${(props) => props.theme.colors.white};
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    font-feature-settings:
      'clig' off,
      'liga' off;
  `,
  SubRight: styled.p`
    text-align: right;
    color: ${(props) => props.theme.colors.black};
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    font-feature-settings:
      'clig' off,
      'liga' off;
  `,
  NumberWrapper: styled.div`
    ${flexCenter}
    gap: 48px;
  `,
  Number: styled.p`
    color: #000;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 200%;
  `,
  IntroWrapper: styled.div`
    display: flex;
    gap: 100px;
  `,
  IntroItem: styled.div`
    ${flexColumn}
    gap: 18px;
  `,
  IntroWrapP: styled.div`
    border-radius: 11px;
    background: #fff9f2;
    height: 100px;
    display: flex;
    align-items: center;
  `,
  IntroP: styled.p`
    margin: 0 auto;
    color: ${(props) => props.theme.colors.black};
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    text-align: center;
    font-feature-settings:
      'clig' off,
      'liga' off;
  `,
  Description: styled.p`
    margin-top: 18px;
    text-align: right;
    color: ${(props) => props.theme.colors.black};
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 155.5%;
    font-feature-settings:
      'clig' off,
      'liga' off;
  `,
  Description_Center: styled.p`
    margin-top: 18px;
    text-align: center;
    color: ${(props) => props.theme.colors.black};
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 155.5%;
    font-feature-settings:
      'clig' off,
      'liga' off;
  `,
  Description_Left: styled.p`
    margin-top: 18px;
    text-align: left;
    color: ${(props) => props.theme.colors.black};
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 155.5%;
    font-feature-settings:
      'clig' off,
      'liga' off;
  `,

  Description_Left_White: styled.p`
    margin-top: 18px;
    text-align: left;
    color: ${(props) => props.theme.colors.white};
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 155.5%;
    font-feature-settings:
      'clig' off,
      'liga' off;
  `,
};

const Section2 = styled.div`
  width: 100vw;
  height: 653px;
  // background: #fff9f2;
  flex-shrink: 0;
  ${flexCenter}
`;

const LogoWrapper = styled.div`
  position: relative;
`;

const Character = {
  _2: styled.div`
    position: absolute;
    bottom: -16px;
    right: 0px;
  `,
};

const Section3 = styled.div`
  height: 1032px;
  ${flexColumn};
  ${flexCenter};
`;

const Section4 = styled.div`
  width: 100%;
  height: 1000px;
  ${flexCenter}
  flex-direction: column;
  background: #111111;
  position: relative;
`;
const SubCard = {
  Wrapper: styled.div`
    display: flex;
    margin-top: 112px;
    gap: 42px;
    position: relative;
  `,
  Img: styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  `,
  Card: styled.div`
    ${flexColumn}
    width: 479px;
    height: 248px;
    border-radius: 15px;
    border: 1px solid #fff;
    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.16);
    background: #fff;
    flex-shrink: 0;
    z-index: 999;
    align-items: baseline;
    padding: 54px;
    justify-content: center;
    gap: 11px;
    text-align: left;
  `,
  Title: styled.p`
    color: ${(props) => props.theme.colors.black};
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    font-feature-settings:
      'clig' off,
      'liga' off;
  `,
  CostDiscounted: styled.span`
    color: ${(props) => props.theme.colors.black};
    font-family: Pretendard;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    text-decoration: line-through;
    text-decoration-color: ${(props) => props.theme.colors.pointred};
    font-feature-settings:
      'clig' off,
      'liga' off;
  `,
  Discount: styled.span`
    margin-left: 12px;
    color: ${(props) => props.theme.colors.pointred};
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    font-feature-settings:
      'clig' off,
      'liga' off;
  `,
  TotalCost: styled.span`
    color: ${(props) => props.theme};
    font-feature-settings:
      'clig' off,
      'liga' off;
    /* Header1 48pt sb */
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 67.2px */
  `,
  Vat: styled.span`
    margin-left: 12px;
    color: ${(props) => props.theme.colors.black};
    font-feature-settings:
      'clig' off,
      'liga' off;

    /* Header4 20pt sb */
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
  `,
  Description: styled.p`
    color: ${(props) => props.theme.colors.black};
    font-feature-settings:
      'clig' off,
      'liga' off;

    /* Body2 16pt rg */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  `,
};
const Section5 = styled.div`
  height: 1141px;
  ${flexCenter}
`;

const PurchaseButton = styled.div`
  ${flexCenter}
  width: 495.5px;
  height: 20px;
  overflow: hidden;
  padding: 45.406px 75.677px;
  border-radius: 28.379px;
  background: ${(props) => props.theme.colors.black};
  flex-direction: column;
  gap: 18.919px;
  cursor: pointer;
`;

const PurchaseP = styled.p`
  color: ${(props) => props.theme.colors.lightgray};
  font-family: Pretendard;
  font-size: 30.271px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
`;

const slideFromLeftToRight = keyframes`
  0% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(0);
  }
`;
const slideFromRightToLeft = keyframes`
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(0);
  }
`;

const AnimatedSection1 = styled.div<SlideInDivProps>`
  opacity: 0;
  ${({ inview }) =>
    inview == 'true' &&
    css`
      animation: ${slideFromLeftToRight} 1s ease-out;
      opacity: 1;
    `}
`;
const AnimatedSection2 = styled.div<SlideInDivProps>`
  opacity: 0;
  ${({ inview }) =>
    inview == 'true' &&
    css`
      animation: ${slideFromLeftToRight} 1.2s ease-out;
      opacity: 1;
    `}
`;
const AnimatedSection3 = styled.div<SlideInDivProps>`
  opacity: 0;
  ${({ inview }) =>
    inview == 'true' &&
    css`
      animation: ${slideFromLeftToRight} 1.4s ease-out;
      opacity: 1;
    `}
`;
const AnimatedSection4 = styled.div<SlideInDivProps>`
  opacity: 0;
  ${({ inview }) =>
    inview == 'true' &&
    css`
      animation: ${slideFromLeftToRight} 1.6s ease-out;
      opacity: 1;
    `}
`;
const AnimatedSection5 = styled.div<SlideInDivProps>`
  opacity: 0;
  ${({ inview }) =>
    inview == 'true' &&
    css`
      animation: ${slideFromRightToLeft} 1s ease-out;
      opacity: 1;
    `}
`;
const AnimatedSection6 = styled.div<SlideInDivProps>`
  opacity: 0;
  ${({ inview }) =>
    inview == 'true' &&
    css`
      animation: ${slideFromRightToLeft} 1.2s ease-out;
      opacity: 1;
    `}
`;
const AnimatedSection7 = styled.div<SlideInDivProps>`
  opacity: 0;
  ${({ inview }) =>
    inview == 'true' &&
    css`
      animation: ${slideFromRightToLeft} 1.4s ease-out;
      opacity: 1;
    `}
`;
const AnimatedSection8 = styled.div<SlideInDivProps>`
  opacity: 0;
  ${({ inview }) =>
    inview == 'true' &&
    css`
      animation: ${slideFromRightToLeft} 1.6s ease-out;
      opacity: 1;
    `}
`;
