import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import PINK_BG from '../../../../assets/images/pink-bg.jpg';

import Banner from '../../../../components/banner';

MainPage.propTypes = {};

function MainPage(props) {
    return (
        <div className="photo-main">
            <Banner title="Your awesome photos 🎉" backgroundUrl={PINK_BG} />

            <Container className="text-center">
                <Link to="/photos/add">Add new photo</Link>
            </Container>
        </div>
    );
}

export default MainPage;
