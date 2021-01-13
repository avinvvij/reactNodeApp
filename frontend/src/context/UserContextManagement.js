import React,{useState} from 'react'

//Create Context
export const UserContext = React.createContext({
    usernm:"",
    setUsernm:()=>{}
});

//Customised Provider
export const UserContextProvider = (props) => {

    const [usernm, setUsernm] = useState("")

    return (
        <UserContext.Provider value={{usernm, setUsernm}}>
            {props.children}
        </UserContext.Provider>
    )
}