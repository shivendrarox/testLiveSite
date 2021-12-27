import React, { Component } from 'react';
import '@stoplight/elements-dev-portal/styles.min.css';
import dynamic from 'next/dynamic'

const DevelopersDynamicComponent = dynamic(() => import('../components/developers/developers'))

class Developers extends Component {
    render() {
        return (
            <>
            <DevelopersDynamicComponent/>
            </>

        );
    }
}

export default Developers;