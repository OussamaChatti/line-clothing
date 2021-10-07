import React from 'react';

import Spinner from '../loading-spinner/loading-spinner';

const WithSpinner = Wrapped => ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <Spinner/>
    ) : (
        <Wrapped {...otherProps} />
       )
}

export default WithSpinner;