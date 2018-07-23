import React from 'react';

class FromScratch extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(creampie => {
            this.setState({ users: creampie })
        })
    }
    render() {
        return (
            <div>
                {this.state.users.map(sillyboi => (
                    <div key={sillyboi.id}>
                        Send to: {sillyboi.name} <br />
                        Address: {sillyboi.address.city}<br />
                        Phone: {sillyboi.phone}<br /><br />

                    </div>
                ))}
            </div>
        )
    }
}

export default FromScratch;