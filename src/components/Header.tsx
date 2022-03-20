import styles from "./Header.module.css"
import {useTranslation} from "react-i18next"
import {useState} from "react";

const Header = () => {
    const {i18n} = useTranslation()
    const [toggle,setToggle] = useState(true)

    const handleLangChange = () => {
        if(toggle){
            i18n.changeLanguage("hu")
            setToggle(false)
        } else {
            i18n.changeLanguage("en")
            setToggle(true)
        }
    }

  return (
    <header className={styles.Header}>
        <button className={styles.Header__langSelector} onClick={handleLangChange}>{i18n.resolvedLanguage}</button>
    </header>
  )
}

export default Header