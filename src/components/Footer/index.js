import React  from 'react';
import { Footer as Container } from './styles';

import { AiOutlineCopyright } from "react-icons/ai";

import logoImg from '../../assets/Logo1.png';

const Footer = () => {
    
    return(
        <Container>    
            
                <a href="https://ciceromngr.github.io/Portfolio-Jonsons.github.io/" target="_blank">
                <p> <AiOutlineCopyright size={15} /> Jonsons Velopers</p></a>
                <img src={logoImg} alt="Lista de Produtos" />
             
        </Container> 
    )
}

export default Footer;