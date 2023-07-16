'use client';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import line from '@/assets/images/line.svg';
import Button from '@/components/common/Button';
import bag from '@/assets/images/bag.svg';
import arrow7 from '@/assets/images/arrow7.svg';
import arrow6 from '@/assets/images/arrow6.svg';
import { useRouter } from 'next/navigation';
import { pickupWardrobe } from '@/api/requests';
import getAccessToken from '@/util/getAccessToken';
import { useCookies } from 'react-cookie';

function page() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [mainAddress, setMainAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [bagQuantity, setBagQuantity] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [date, setDate] = useState('');

  const BagQuantity = Number(bagQuantity);
  const ProductQuantity = Number(productQuantity);

  const [bank, setBank] = useState({
    bankName: '',
    accountNumber: '',
  });
  const [address, setAddress] = useState({
    detailAddress: '',
    mainAddress: '',
    zipCode: '',
  });

  const [errorphoneNumber, setErrorPhoneNumber] = useState(false);

  const isAllFieldsFilled = !!(
    name.trim() &&
    phoneNumber.trim() &&
    bankName.trim() &&
    accountNumber.trim() &&
    detailAddress.trim() &&
    mainAddress.trim() &&
    zipCode.trim() &&
    bagQuantity.trim() &&
    productQuantity.trim() &&
    date.trim()
  );

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  const handleBankNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBankName(e.target.value);
    setBank((prevState) => {
      return { ...prevState, bankName: e.target.value };
    });
  };
  const handleAccountNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAccountNumber(e.target.value);
    setBank((prevState) => {
      return { ...prevState, accountNumber: e.target.value };
    });
  };
  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
    setAddress((prevState) => {
      return { ...prevState, zipCode: e.target.value };
    });
  };
  const handleMainAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMainAddress(e.target.value);
    setAddress((prevState) => {
      return { ...prevState, mainAddress: e.target.value };
    });
  };
  const handleDetailAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDetailAddress(e.target.value);
    setAddress((prevState) => {
      return { ...prevState, detailAddress: e.target.value };
    });
  };
  const handleProductQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductQuantity(e.target.value);
  };
  const handleBagQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBagQuantity(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const [cookies, setCookie, removeCookie] = useCookies();

  const registerHandler = async () => {
    if (isAllFieldsFilled) {
      let accessToken = await getAccessToken(cookies, setCookie);

      // if (isNaN(Number(phoneNumber)) ) {
      //   setErrorPhoneNumber(true);
      //   return;
      // }

      // if (isNaN(Number(phoneNumber)) || isNaN(Number(accountNumber)) || isNaN(Number(date))) {
      //   alert("시간을 올바르게 입력해주세요.");
      //   return;
      // }

      const response = await pickupWardrobe(
        accessToken,
        name,
        phoneNumber,
        bank,
        address,
        BagQuantity,
        ProductQuantity,
        new Date(date).toISOString()
      );
      if (response.success) {
        router.push('/wardrobe/register/success');
      } else {
      }
    }
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>옷장수거 신청</Title>
        <SemiTitle>
          리픽이 직접 옷을 수거해드려요! 어디로 가면 될까요?
        </SemiTitle>
      </TitleWrapper>
      <Line src={line.src} />
      <User>{'회원 정보'}</User>
      <Wrapper>
        <Info>
          {'이름'}
          <div className="star">{'*'}</div>
        </Info>
        <Content value={name} onChange={handleNameChange} />
      </Wrapper>
      <Wrapper>
        <Info>
          {'전화번호'}
          <div className="star">{'*'}</div>
        </Info>
        <Content value={phoneNumber} onChange={handlePhoneNumberChange} />
      </Wrapper>
      <Wrapper>
        <Info>
          {'계좌번호'}
          <div className="star">{'*'}</div>
        </Info>
        <Account>
          <AccountDetail>은행</AccountDetail>
          <Content
            className="bank"
            value={bankName}
            onChange={handleBankNameChange}
          />
          <AccountDetail>계좌번호</AccountDetail>
          <Content
            className="account"
            value={accountNumber}
            onChange={handleAccountNumberChange}
          />
        </Account>
      </Wrapper>
      <Line src={line.src} />
      <User>{'수거 지역 정보 입력하기'}</User>

      <A>
        <S>
          <Wrapper>
            <Info>
              {'수거 의류 예상 수량'}
              <div className="star">{'*'}</div>
            </Info>
            <Count>
              <Content
                className="cloth"
                placeholder="예상 수량"
                value={productQuantity}
                onChange={handleProductQuantityChange}
              />
              <Text>벌</Text>
              <Info className="bag">
                {'필요한 리픽백 수'}
                <div className="star">{'*'}</div>
              </Info>
              <Content
                className="cloth"
                placeholder="예상 개수"
                value={bagQuantity}
                onChange={handleBagQuantityChange}
              />
              <Text>개가 필요해요</Text>
            </Count>
          </Wrapper>

          <Wrapper>
            <Info>
              {'수거 주소'}
              <div className="star">{'*'}</div>
            </Info>
            <ApplyWrapper>
              <CheckWrapper>
                <Check />
                <AddressApply>등록 주소로 수거 신청하기</AddressApply>
              </CheckWrapper>
            </ApplyWrapper>
          </Wrapper>
          <Address>
            <AddressWrapper>
              <Content
                className="address"
                value={zipCode}
                onChange={handleZipCodeChange}
              />
              <Confirm>{'우편번호'}</Confirm>
            </AddressWrapper>
            <Content
              className="detail-address"
              placeholder="상세 주소를 입력해주세요"
              value={mainAddress}
              onChange={handleMainAddressChange}
            />
            <Content
              className="detail-address"
              placeholder="상세 주소를 입력해주세요"
              value={detailAddress}
              onChange={handleDetailAddressChange}
            />
          </Address>

          <Wrapper>
            <Info>
              {'원하는 수거 날짜 시간'}
              <div className="star">{'*'}</div>
            </Info>
            <Content
              placeholder="2023-06-23"
              value={date}
              onChange={handleDateChange}
            />
          </Wrapper>
        </S>
        <B>
          <BagConfirm>
            <Check>
              <Question>?</Question>
            </Check>
            <BagText>리픽백 크기 확인하기</BagText>
          </BagConfirm>

          <BagContainer>
            <BagWrapper>
              <BagHeight>
                <CM7>70cm</CM7>
                <Arrow7 src={arrow7.src} />
                <Bag src={bag.src} />
              </BagHeight>
              <BagWidth>
                <Arrow6 src={arrow6.src} />
                <CM6>60cm</CM6>
                <More>
                  리픽백 한 개에는 티셔츠 <br /> 30벌 정도를 담을 수 있어요
                </More>
              </BagWidth>
            </BagWrapper>
          </BagContainer>
        </B>
      </A>
      <div className="button" onClick={() => registerHandler()}>
        <Button content="신청하기" num="4" />
      </div>
    </Container>
  );
}

export default page;

const Container = styled.div`
  ::placeholder {
    color: var(--3, #b4b4b4);
  }
  .star {
    color: rgba(255, 61, 0, 1);
  }
  .button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    margin-bottom: 148px;
  }
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
`;
const SemiTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
`;
const TitleWrapper = styled.div`
  margin-top: 120px;
`;
const Line = styled.img`
  margin-top: 60px;
`;
const User = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 40px;
`;
const Info = styled.div`
  font-size: 20px;
  width: 207px;
  display: flex;

  //   .star {
  //     color: rgba(255, 61, 0, 1);
  //   }
  &.bag {
    width: 153px;
    margin-left: 24px;
  }
`;
const Content = styled.input`
  width: 436px;
  height: 56px;
  background-color: rgba(232, 232, 232, 1);
  border-radius: 15px;
  border: none;
  font-size: 20px;
  font-weight: 400;
  font-family: 'Pretendard';
  color: rgba(180, 180, 180, 1);
  padding: 0px 0px 0px 24px;
  outline: none;

  &.address {
    width: 308px;
    margin-left: 206px;
    margin-bottom: 18px;
  }

  &.detail-address {
    margin-bottom: 18px;
    margin-left: 206px;
  }

  &.bank {
    width: 94px;
    height: 56px;
    margin-right: 24px;
  }

  &.account {
    width: 196px;
    height: 56px;
  }

  &.cloth {
    width: 94px;
    height: 56px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`;
const Confirm = styled.button`
  border-radius: 15px;
  background: var(--3, #b4b4b4);
  width: 104px;
  height: 56px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  margin-left: 24px;
`;
const Account = styled.div`
  display: flex;
  align-items: center;
`;
const AccountDetail = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-right: 12px;
`;
const Count = styled.div`
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-left: 12px;
`;
const Address = styled.div`
  display: flex;
  flex-direction: column;
`;
const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  &.date {
    margin-top: 16px;
    margin-bottom: 18px;
  }
`;
const Check = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 15px;
  background: var(--4, #e8e8e8);
`;
const Question = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  font-size: 20px;
`;
const AddressApply = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
  color: var(--2, #5f5f5f);

  &.am {
    margin-right: 12px;
  }
`;
const ApplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const AddressWrapper = styled.div`
  display: flex;
`;
const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 206px;
  color: var(--2, #5f5f5f);
`;
const Dates = styled.input`
  width: 56px;
  height: 56px;
  border-radius: 15px;
  opacity: 0.5;
  background: var(--4, #e8e8e8);
  margin-left: 24px;
`;
const DateInfo = styled.div``;
const DateInfoWrapper = styled.div`
  display: flex;
  margin-bottom: 18px;
`;
const B = styled.div`
  //   margin-top: 110px;
  margin-left: 135px;
`;
const S = styled.div``;
const A = styled.div`
  display: flex;
`;
const BagText = styled.div`
  font-size: 20px;
  margin-left: 17px;
`;
const BagConfirm = styled.div`
  display: flex;
  margin-bottom: 14px;
`;
const Bag = styled.img`
  width: 135px;
  height: 142px;
`;

const BagContainer = styled.div`
  width: 310px;
  height: 278px;
  border-radius: 16px;
  background: var(--4, #e8e8e8);
  display: flex;
`;
const Arrow7 = styled.img`
  margin-left: 6.94px;
  margin-right: 12.06px;
`;
const Arrow6 = styled.img`
  //   margin-left: 97px;
  margin-top: 12px;
`;
const BagHeight = styled.div`
  display: flex;
  align-items: center;
  margin-left: 31px;
`;
const BagWidth = styled.div`
  margin-left: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CM7 = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
const CM6 = styled.div`
  font-size: 16px;
  font-weight: 400;
  //   margin-left: 50px;
`;
const BagWrapper = styled.div`
  margin-top: 27px;
`;
const More = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin-top: 3px;
`;
