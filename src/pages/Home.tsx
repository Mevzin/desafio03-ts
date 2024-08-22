import { Box, Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";
import { IUser } from "../types/user";

const Home = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { setIsLoggedIn, setUser } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const account = await login(email, password)

        console.log(account);


        if (!account) {
            return alert('Email inválido ou senha inválidos')
        }

        setIsLoggedIn(true)
        setUser(account as IUser)
        changeLocalStorage({ login: true, user: account as IUser })
        // @ts-ignore comment 
        navigate(`/conta/${account.id}`)
    }

    return (
        <Box padding="25px">
            <Card>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input placeholder="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <Center>
                    <DButton
                        onClick={() => validateUser(email)}
                    />
                </Center>
            </Card>
        </Box>
    );
}

export default Home;
