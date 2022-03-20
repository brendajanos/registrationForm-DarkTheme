import { createContext, useContext } from 'react'

export interface IBasicData {
    email: string
    password: string
    birthdate: string
    newsletter: boolean
    cookies: boolean
}

interface IRegistrationContext {
    basicData?: IBasicData
    setBasicData: (data: IBasicData) => void
}

const RegistrationContext = createContext<IRegistrationContext>({ setBasicData: () => {} })
const useRegistration = () => useContext(RegistrationContext)
const RegistrationProvider = RegistrationContext.Provider

export { RegistrationProvider, useRegistration }
