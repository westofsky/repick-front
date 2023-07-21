'use client';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const selectedMypickPage = atom<string>({
  key: '마이픽 현황',
  default: '마이픽 현황',
});

export const selectedNavPage = atom<string>({
  key: '서비스 가이드',
  default: '서비스 가이드',
});

export const selectedSubscribePlan = atom<string>({
  key: 'BASIC',
  default: 'BASIC',
});

export const userInfoState = atom({
  key: 'userInfo',
  default: {
    id: 0,
    userEmail: '',
    userNickname: '',
  },
  effects_UNSTABLE: [persistAtom],
});

interface Product {
  homeFittingId: number;
  product: {
    brand: string;
    detail: string;
    size: string;
    price: number;
    name: string;
    mainImageFile: {
      imagePath: string;
    };
  };
  isChecked: boolean;
}

export const requestProducts = atom<Product[]>({
  key: 'products',
  default: [
    {
      homeFittingId: 0,
      product: {
        brand: '',
        detail: '',
        size: '',
        price: 0,
        name: '',
        mainImageFile: {
          imagePath: '',
        },
      },
      isChecked: false,
    },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const totalPrice = atom<number>({
  key: 'totalPrice',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
