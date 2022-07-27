import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import './Header.scss';

function Header(props) {
    return (
        <div className="header">
            <Container className="justify-content-between">
                <Row>
                    <Col sm="4">
                        <a
                            className="header__link header__title"
                            href="https://www.facebook.com/truongson2003dNOJPjoUEk4Rq5pQ3A1655449765299eoq"
                            target="_blank"
                            rel="noreferrer"
                        >
                            TS DUCT
                        </a>
                    </Col>
                    <Col sm="8" className="text-end">
                        <NavLink
                            exact="true"
                            // className=""
                            to="/photos/"
                            className={(isActive) => {
                                return 'nav-link' + (!isActive ? ' unselected' : '--active');
                            }}
                            // activeClassName="header__link--active"
                        >
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;
