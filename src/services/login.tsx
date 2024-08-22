import { api } from "../api"
import { IUser } from "../types/user"

export const login = async (email: string, password: string): Promise<IUser | boolean> => {
    const data: any = await api

    if (email !== data.email || password !== data.password) {
        return false
    }

    return data
}
