import '../styles/globals.css'
import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import { isInWechat, isInWechatMobile, isMobileDevice, flexible } from '@/utils'
import { mobileState, configState } from '../store/global'

/**
 * 入口文件
 * app.tsx的职责如下
 * 挂载Context，和状态管理组件，初始化状态，把node获取到的一些信息注入全局状态
 */
interface Props {
  isMobile: boolean
  isWechat: boolean
  isWechatMobile: boolean
  ip: string
}
function MyApp({ Component, pageProps, isMobile, isWechat, isWechatMobile, ip }: AppProps & Props) {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(mobileState, { isMobile, isWechat, isWechatMobile })
        set(configState, ip)
      }}
    >
      <Head>
        {isMobile ? (
          <>
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover'
            />
            <script>{`;(${flexible})()`}</script>
          </>
        ) : null}
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
MyApp.getInitialProps = async (appContext: AppContext) => {
  const { req } = appContext.ctx
  let userAgent = ''
  if (req) {
    userAgent = req.headers['user-agent']!
  }
  const isMobile = isMobileDevice(userAgent)
  const isWechat = isInWechat(userAgent)
  const isWechatMobile = isInWechatMobile(userAgent)
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps, isMobile, isWechat, isWechatMobile, ip: req?.connection?.remoteAddress }
}

export default MyApp
