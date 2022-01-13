import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { htmlState } from '../state'

const Tools: NextPage<any> = () => {
  useEffect(() => {
    console.log('useEffect:Tools')
  }, [])
  const [posts] = useRecoilState(htmlState)
  console.log('render:Tools', posts)
  return <div>Tools</div>
}

export async function getStaticProps() {
  const posts = await (await fetch('http://www.saas.perfma-inc.net/inner/api/news?size=100')).json()
  // const posts = res.json()
  // return {
  //   props:{
  //     posts
  //   }
  // }
  return {
    props: {
      posts,
    },
  }
}

export default Tools
