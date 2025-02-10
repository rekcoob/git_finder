// ThemeToggle.tsx
import React from 'react'
import { useColorScheme } from '../../context/ColorSchemeContext'
import styles from './ColorPicker.module.css'

export const ColorPicker: React.FC = () => {
  const { colorScheme, setColorScheme } = useColorScheme()

  return (
    <div>
      <label className={styles.radioButtonLabel}>
        <input
          type='radio'
          value='blue'
          checked={colorScheme === 'blue'}
          onChange={() => setColorScheme('blue')}
          className={styles.radioButtonInput}
          style={{ backgroundColor: '#474bff ' }}
        />
      </label>
      <label className={styles.radioButtonLabel}>
        <input
          type='radio'
          value='green'
          checked={colorScheme === 'green'}
          onChange={() => setColorScheme('green')}
          className={styles.radioButtonInput}
          style={{ backgroundColor: '#26a69a ' }}
        />
      </label>
      <label className={styles.radioButtonLabel}>
        <input
          type='radio'
          value='red'
          checked={colorScheme === 'red'}
          onChange={() => setColorScheme('red')}
          className={styles.radioButtonInput}
          style={{ backgroundColor: '#007bff' }}
        />
      </label>
    </div>
  )
}
