import { Outlet } from "react-router-dom"
import { Container, ContainerConteudo } from "./Styles"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


export default function AppLayout() {
    return (
        <Container>
            <ContainerConteudo>
                <Header />
                <Outlet />
            </ContainerConteudo>
            <Footer />
        </Container>
    );
}