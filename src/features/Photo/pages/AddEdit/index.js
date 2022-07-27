import React from 'react';
import Banner from '../../../../components/banner';

import PhotoForm from '../../components/PhotoForm';
import './style.scss';

AddEditPage.propTypes = {};

function AddEditPage(props) {
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎" />

            <div className="photo-edit__form">
                <PhotoForm onSubmit={(values) => console.log('Form submit: ', values)} />
            </div>
        </div>
    );
}

export default AddEditPage;
