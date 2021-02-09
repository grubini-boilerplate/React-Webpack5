import React, { Component } from 'react';
import { AppStyles } from './AppStyles';


class App extends Component {
    constructor(props) { 
        super(props);
    }

    render() {
        return (
            <AppStyles>
                <h1>XY Panel</h1>
            </AppStyles>
        )
    }
}

export default App;