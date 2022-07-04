import React, { createContext, useState, useEffect } from 'react'
const DataContext = createContext()
const ContextData = (props) => {
    const { children } = props
    const [userData, setUserData] = useState({
        userName: '',
        designation: '',
        totalExp: '',
        description: ''
    })
    useEffect(() => {
        setUserData({
            userName: 'Jaidev',
            designation: 'Full Stack Developer',
            totalExp: '6+ Years',
            description: 'JaiDev is a true coder. He loves to do coding most of the time'
        })
    }, [])
    const manageUserData = (obj) => {
        obj && setUserData(obj)
    }
    return (
        <DataContext.Provider value={{
            userData,
            manageUserData
        }}>
            {children}
        </DataContext.Provider >
    )
}

export { ContextData }
export default DataContext