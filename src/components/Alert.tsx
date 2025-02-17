import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/AlertContext'

export const Alert: React.FC = () => {
  const { alert } = useContext(AlertContext)

  return (
    <>
      {alert !== null && (
        <div className={`alert alert-${alert.type}`}>
          <i className='fas fa-info-circle' /> {alert.msg}
        </div>
      )}
    </>
  )
}
