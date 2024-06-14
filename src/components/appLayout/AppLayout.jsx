import { Outlet } from "react-router-dom"
import { Container, ContainerConteudo } from "./styleAppLayout"
import Header from "../header/Header";
import Footer from "../footer/Footer";


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