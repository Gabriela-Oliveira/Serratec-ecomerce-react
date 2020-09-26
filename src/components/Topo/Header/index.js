import React from 'react';

import { Container } from './styles';

const Header = (props) => {
    return(
        <Container>
            <h1>Logo</h1>
            <h2>{props.nome}</h2>
        </Container>
    )
}

export default Header;