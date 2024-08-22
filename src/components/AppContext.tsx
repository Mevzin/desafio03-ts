import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"
import { IUser } from "../types/user"

interface IAppContext {
  user?: IUser,
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void,
  setUser: (User: IUser) => void
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [user, setUser] = useState<IUser>();

  const storage = getAllLocalStorage()

  // eslint-disable-next-lin
  useEffect(() => {
    if (storage) {
      const { login } = JSON.parse(storage)
      setIsLoggedIn(login)
    }
  }, [])



  return (
    <AppContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  )
}
