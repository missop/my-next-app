import { atom } from 'recoil';

export const mobileState = atom({
  key: 'mobileState',
  default: {
    isMobile: false,
    isWechat: false,
    isWechatMobile: false
  }
})

export const configState = atom({
  key: 'configState',
  default: ''
})