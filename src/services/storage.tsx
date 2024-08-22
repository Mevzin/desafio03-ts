import { IUser } from "../types/user";


interface IDIoBank {
    login: boolean;
    user?: IUser;
}

const dioBank = {
    login: false
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDIoBank): void => {
    console.log(dioBank);

    localStorage.setItem('diobank', JSON.stringify(dioBank))
}
