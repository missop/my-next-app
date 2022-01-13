/**
 * 判断是否是移动设备
 * @return {bool}
 */
 export const isMobileDevice = (userAgent: string): boolean => {
  if (userAgent) {
    return /mobile|MiniProgramEnv/i.test(userAgent.toLowerCase());
  }
  return false;
};

/**
 * 判断是否是微信中
 * @return {bool}
 */
 export const isInWechat = (userAgent: string): boolean => {
  if (userAgent) {
    return /micromessenger/i.test(userAgent.toLowerCase());
  }
  return false;
};

/**
 * 判断微信移动端
 */
export const isInWechatMobile = (userAgent: string): boolean => isInWechat(userAgent) && !(/windowswechat/u).test(userAgent);

export const flexible = () => {
  const docEl = document.documentElement;
  const dpr = window.devicePixelRatio || 1;

  // adjust body font size
  // function setBodyFontSize() {
  //   if (document.body) {
  //     document.body.style.fontSize = `${12 * dpr}px`;
  //   } else {
  //     document.addEventListener('DOMContentLoaded', setBodyFontSize);
  //   }
  // }
  // setBodyFontSize();

  // set 1rem = viewWidth / 10
  const setRemUnit = () => {
    const rem = docEl.clientWidth / 750 * 100;
    docEl.style.fontSize = `${rem}px`;
  };

  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports
  if (dpr >= 2) {
    const fakeBody = document.createElement('body');
    const testElement = document.createElement('div');
    testElement.style.border = '.5px solid transparent';
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines');
    }
    docEl.removeChild(fakeBody);
  }
};
