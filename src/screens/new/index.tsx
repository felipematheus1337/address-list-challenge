import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header } from '../../components/styles';

export default function NewAddressScreen() {
    return (
        <Fragment>
            <Header>
                <Link to="/">
                    <div>
                        <i className="fas fa-chevron-left"></i>
                        <h1 title='Página de endereços'>Cadastro de endereço</h1>
                    </div>
                </Link>
            </Header>
        </Fragment>
    )
}