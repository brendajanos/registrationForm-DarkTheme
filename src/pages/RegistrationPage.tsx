import { FormEventHandler } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import { useRegistration } from '../contexts/registration'

const RegistrationPage = () => {
    const navigate = useNavigate()
    const registration = useRegistration()
    const { t } = useTranslation()

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault()

        const form = event.target as HTMLFormElement

        registration.setBasicData({
            email: form.email.value,
            password: form.password.value,
            birthdate: form.birthdate.value,
            newsletter: form.newsletter.value,
            cookies: form.cookies.value,
        })

        navigate('/preferences')
    }

    return (
        <Modal>
            <form onSubmit={handleSubmit}>
                <div className="fields">
                    <label htmlFor="email">{t('reg.email')}</label>
                    <input id="email" name="email" type="email" required></input>

                    <label htmlFor="password">{t('reg.password')}</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        required
                    ></input>

                    <label htmlFor="birthdate">{t('reg.birthdate')}</label>
                    <input id="birthdate" name="birthdate" type="date" required></input>

                    <label htmlFor="newsletter">{t('reg.newsletter')}</label>
                    <input id="newletter" name="newsletter" type="checkbox"></input>

                    <div className="cookie" style={{ paddingBottom:20}}>
                        <label htmlFor="cookies">{t('reg.cookies')}</label>
                        <input id="cookies" name="cookies" type="checkbox" required></input>
                    </div>

                    <input
                        style={{ display: 'flex', justifyContent: 'center' }}
                        type="submit"
                        value={t<string>('next')}
                    />
                </div>
            </form>
        </Modal>
    )
}

export default RegistrationPage
