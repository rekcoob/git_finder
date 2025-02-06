import React from 'react'
// import spinner from './spinner.gif'
import styles from './Spinner.module.css'

export const Spinner: React.FC = () => (
  <div className={styles.spinnerContainer}>
    <div className={styles.spinner}></div>
  </div>
)

// export const Spinner: React.FC = () => (
// 	<>
// 		<img
// 			src={spinner}
// 			alt="Loading..."
// 			style={{ width: '200px', margin: 'auto', display: 'block' }}
// 		/>
// 	</>
// );
