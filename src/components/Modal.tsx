import { FC } from 'react'
import styles from "./Modal.module.css"

const Modal :FC = ({children}) => {
  return (
    <div className={styles.Modal}>{children}</div>
  )
}

export default Modal