import Image from 'next/image'
import styles from './page.module.css'
import Options from './components/Options/Options'

export default function Home() {

  return (
    <main className={styles.main}>

      <Options />
  
      <div className={styles.center}>
        
      </div>
      
    </main>
  )
}
