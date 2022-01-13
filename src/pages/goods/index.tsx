import type { NextPage } from 'next'
import Image from 'next/image'
import u from '../../assets/images/u.jpeg'

const Html: NextPage<any> = ({ posts }) => {
  console.log('posts', posts, import.meta.url)
  return (
    <div>
      <Image src={u} alt='' />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: { posts: [] },
  }
}

export default Html
