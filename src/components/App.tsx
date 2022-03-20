import { useState } from 'react'
import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom'
import RegistrationPage from '../pages/RegistrationPage'
import ConfirmationPage from '../pages/ConfirmationPage'
import PreferencesPage from '../pages/PreferencesPage'
import { RegistrationProvider, IBasicData } from '../contexts/registration'
import ProtectedRoute from './ProtectedRoute'
import Header from './Header'
import i18n from 'i18next'
import { initReactI18next } from "react-i18next";


i18n.use(initReactI18next).init({
    resources: {
        en:{
            translation:{
                reg: {
                    email: "Email",
                    password: "Password",
                    birthdate: "Birthdate",
                    newsletter: "Do you accept to recieve newsletters?",
                    cookies: "Do you accept our privacy policy?",
                },
                next:"Next" ,
                register:"Registration",
                select: "Select",
                computerOptions: {
                    laptop:"Laptop",
                    desktop:"Desktop"
                },
                confirmation: "Email sent to {{email}}.",
                pref :{
                    computerOptions:"Which type of hardware do you have?",
                    softwareOptions:"Which softwares can be found on your machine?"
                }

            }

        },
        hu:{
            translation:{
                reg: {
                    email: "Email",
                    password: "Jelszó",
                    birthdate: "Születési idő",
                    newsletter: "Szeretnél hírleveleket?",
                    cookies: "Hozzájárulsz az adatakezeléshez?",
                },
                next:"Következő" ,
                register:"Regisztrálok",
                select: "Válassz",
                computerOptions: {
                    laptop:"Laptop",
                    desktop:"Asztali gép"
                },
                confirmation: "Az {{email}}-re elküldtük a további információkat.",
                pref :{
                    computerOptions:"Laptop vagy asztali gép?",
                    softwareOptions:"Milyen szoftverek találhatóak meg a gépeden?"
                }
                
            }
        }
    },
    fallbackLng: "en"
})

function App() {
    const [basicData, setBasicData] = useState<IBasicData>()

    return (
        <Router>
            <div className="App">
                <Header/>
                <RegistrationProvider value={{ basicData, setBasicData }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/registration" />} />
                        <Route path="/registration" element={<RegistrationPage />} />
                        <Route
                            path="/preferences"
                            element={
                                <ProtectedRoute hasBasicData={!!basicData}>
                                    <PreferencesPage />{' '}
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/email-confirmation"
                            element={
                                <ProtectedRoute hasBasicData={!!basicData}>
                                    <ConfirmationPage />{' '}
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </RegistrationProvider>
            </div>
        </Router>
    )
}

export default App
