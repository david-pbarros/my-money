import React from 'react';
import ReduxToaster from 'react-redux-toastr';
import 'modules/react-redux-toastr/lib/css/react-redux-toastr.css';

export default props => (
    <ReduxToaster
        timeout={4000}
        newestOnTop={false}
        preventDuplicates={true}
        position='top-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar />

);