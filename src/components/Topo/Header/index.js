import React from 'react';

import { Container } from './styles';


import logo from '../../../assets/Logo.png';

const Header = (props) => {
    return(
        <Container>
            <img src={logo}></img>
            <h2>{props.nome}</h2>
        </Container>
    )
}

export default Header;