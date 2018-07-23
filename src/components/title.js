import React from 'react';

class Title extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name},</h1>
                <h3>Welcome to Fenway Media One</h3>
            </div>
        )
    }
}

export default Title;