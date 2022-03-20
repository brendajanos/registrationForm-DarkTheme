import { useTranslation } from 'react-i18next'
import Modal from '../components/Modal'
import { useRegistration } from '../contexts/registration'

const ConfirmationPage = () => {
    const registration = useRegistration()
    const { t } = useTranslation()

    return (
        <Modal>
            <div className="message">{t('confirmation', { email: registration.basicData?.email })}</div>
        </Modal>
    )
}

export default ConfirmationPage
