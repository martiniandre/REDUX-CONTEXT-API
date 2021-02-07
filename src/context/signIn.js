import { useState, useEffect, createContext} from 'react'

const initalContext = {
    user: {},
    signed:false,
    signIn: function(){},
    logout:function(){}
}   

export const authContext = createContext(initalContext)

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null)
    useEffect(() => {
        const storage = localStorage.getItem("user")
        if(!storage) return setUser(null)
        setUser(JSON.parse(storage))
    },[])

    const signIn = (data) => {
        localStorage.setItem("user",JSON.stringify(data))
        return setUser(data)
    }
    const logout = () =>  {
        const storage = localStorage.getItem("user")
        if(storage) {
            localStorage.removeItem("user")
            setUser(null)
        }
        console.log(user)
    }
    return(
        <authContext.Provider value={{signed: !!user, user,signIn,logout}}>
            { children }
        </authContext.Provider>
    )
}
