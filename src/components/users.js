import React from 'react';

class Users extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        users: []
    };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            this.setState({ users: json })
        })
    }
    render() {
        let { users } = this.state

        return (
            <div>
                <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Phone Number</th>
                        </tr>
                        {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.phone}</td>
                        </tr>
            ))}
                </table>
            </div>
        )
    }
}

export default Users;