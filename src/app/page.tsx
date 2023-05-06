import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Easy Graph</div>
      <Link href="/graph">开始</Link>
    </main>
  )
}
