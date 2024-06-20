import { Contact, ContainerContacts, ContainerFooter, Logo } from "./Styles";
import logo from '../../assets/LogoFooter.png';

function Footer() {

    return (
      <ContainerFooter>
        <Logo src={logo} alt="logo"></Logo>
        <ContainerContacts>
          <Contact href="mailto:casatuetimba@gmail.com">casatuetimba@gmail.com</Contact>
          <Contact href="https://wa.me/5537996349759">(37) 9 9634 9759</Contact>
        </ContainerContacts>
      </ContainerFooter>
    );
  }
  
  export default Footer;