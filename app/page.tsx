import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/nature.jpg"
        alt="background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </main>
  )
}
