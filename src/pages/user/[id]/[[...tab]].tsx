import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

const UserTab: NextPage<any> = () => {
  const router = useRouter()
  const { id, tab } = router.query
  if (Array.isArray(tab)) {
    console.log("id", id, tab[0])
  }

  return <div>
    <Link href='/html'>html</Link>
  </div>
}

export default UserTab