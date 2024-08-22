import { Text } from "@chakra-ui/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../components/AppContext"

const ContaInfo = () => {

    const { user } = useContext(AppContext)

    return (
        <>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta
            </Text>
            {user?.name ? (<>
                <Text fontSize='xl'>
                    Conta
                </Text>
                <Text>
                    Nome: {user?.name}
                </Text>
                <Text>
                    Email: {user?.email}
                </Text>
                <Text>
                    Register Id: {user?.id}
                </Text>
            </>) : (<>
                Aguardando dados ...
            </>)}
            <Link to={`${user?.id}`}>
                <Text fontSize='xl'>
                    Retornar a página principal
                </Text>
            </Link>
        </>
    )
}

export default ContaInfo
