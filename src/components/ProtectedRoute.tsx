import { Navigate } from 'react-router-dom'
import { FC } from 'react'

const ProtectedRoute: FC <{hasBasicData:boolean}> = ({ hasBasicData, children }) => {
    if (!hasBasicData){
        return <Navigate to="/" replace />
    }

    return children as any
}

export default ProtectedRoute
