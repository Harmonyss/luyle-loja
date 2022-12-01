import { Conatiner, Menu, Logo, Row, ConatinerMenu } from "./style"
import logo from "../../assets/Logo.jfif"

const Header = () =>{
    return(
        <Conatiner>
            <Row>
                <Logo href="/"><img src={logo} alt="" /></Logo>
                <ConatinerMenu>
                    <Menu href="/cadastro">Cadastro</Menu>
                    <Menu href="/login">Login</Menu>
                </ConatinerMenu>
            </Row>
        </Conatiner>
    )

}

export {Header}