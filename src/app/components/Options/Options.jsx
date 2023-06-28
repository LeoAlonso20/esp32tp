'use client'

import styles from './Options.module.css'

const URL_ESP32 = 'http://192.168.1.100' 

export default function Options() {

  const handleTurnOn = async () => {
    try {
      const response = await fetch(`${URL_ESP32}/encender_led`);
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  const handleTurnOff = async () => {
    try {
      const response = await fetch(`${URL_ESP32}/apagar_led`);
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handlePercent = () => {
  }

  const handleMsgDisplay = () => {
  }

    return (
        <div className={styles.actions}>
        <button className={`${styles.action}`} onClick={handleTurnOn}>
          Encender LED
        </button>
        <button className={`${styles.action}`} onClick={handleTurnOff}>
          Apagar LED
        </button>
        <button className={`${styles.action}`} onClick={handlePercent}>
          Porcentaje LED
        </button>
        <button className={`${styles.action}`} onClick={handleMsgDisplay}>
          Mensaje en Display
        </button>
      </div>
    )

}