import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { tester } from '@/utils/test'
import { useEffect } from 'react'
import styles from './index.module.css'

const UserTab: NextPage<any> = () => {
  const router = useRouter()
  const { id, tab } = router.query
  if (Array.isArray(tab)) {
    console.log('id', id, tab[0])
  }

  useEffect(() => {
    tester()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.mid}></div>
      <div className={styles.right}></div>
    </div>
  )
}

export default UserTab
