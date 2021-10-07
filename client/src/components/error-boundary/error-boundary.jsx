import React from 'react';

import {ErrorImageOverlay,ErrorImageContainer,ErrorImageText} from './error-boundary.styles';

class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state ={
            hasErrored:false
        };

    }
    static getDerivedStateFromError(error) {
        //process error
        return {hasErrored:true};
    }
    componentDidCatch(error,info) {
        console.log(error);
    }

    render(){
        if (this.state.hasErrored) {
           return (<ErrorImageOverlay>
                <ErrorImageContainer imageUrl='https://i.imgur.com/O0DCcQy.png'/>
                <ErrorImageText>Oops! something went wrong with the page :( Try reloading. </ErrorImageText>
                </ErrorImageOverlay>);
        }
        return this.props.children;
    }
}

export default ErrorBoundary;