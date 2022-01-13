import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { parse } from 'cookie'
import { MobileHtml } from '../../mobile/html'
import { mobileState, configState } from '../state'
import { htmlState } from './state'
import Tools from './components/tools'

const Html: NextPage<any> = ({ posts }) => {
  const [state, setState] = useRecoilState(htmlState)
  const [mobile] = useRecoilState(mobileState)
  const [ip] = useRecoilState(configState)

  useEffect(() => {
    console.log('useEffect:Html')
    setState({ posts })
  }, [])
  console.log('render:Html')
  return mobile.isMobile ? (
    <MobileHtml />
  ) : (
    <div>
      Static Html
      <Tools />
    </div>
  )
}

export async function getServerSideProps(ctx: any) {
  const posts = await (await fetch('http://www.saas.perfma-inc.net/inner/api/news?size=100')).json()
  const { cookie } = ctx.req.headers
  const cookieObj = parse(cookie)

  // if (typeof cookieObj === 'object' && !('login' in cookieObj)) {
  //   return {
  //     redirect: {
  //       destination: '/login?redirct_url=/html',
  //       permanent: false,
  //     },
  //   }
  // }

  return {
    props: {
      posts,
    },
  }
}

export default Html
