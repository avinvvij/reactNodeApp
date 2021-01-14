import React, { useState, useEffect } from 'react'

//Create Context
export const UserContext = React.createContext();
//[Avin] -> Avoid giving defaults in context, if there are 100s of store, you will be having a huge code base. Since JS works with JSON, you can
// add or revome anything dynamically.

//Customised Provider
export const UserContextProvider = (props) => {

    const [usernm, setUsernm] = useState("")

    useEffect(() => {
        //[Avin]-> adding the use effect to log the changes in the username
        console.log(usernm);
    }, [usernm])


    //[Avin]-> In the value object specify the key and values, you had just specified the one variable, it makes the code works because
    //JS will use same variable for key and value, it's difficult to understand

    return (
        <UserContext.Provider value={{ usernm: usernm, setUsernm: setUsernm }}>
            {props.children}
        </UserContext.Provider>
    )
}