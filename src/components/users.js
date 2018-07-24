import React from 'react';

class Users extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        users: [],
        search: ''
    };
    this.updateSearch = this.updateSearch.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            this.setState({ users: json })
        })
    }

    updateSearch(event) {
        this.setState({
            search: event.target.value.substr(0, 10)
        })
    }

    render() {

        let filteredChange = this.state.users.filter(
            (user) => {
                return user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        return (
            <div>
            <table>
                <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Phone Number</th>
                        </tr>
                        {filteredChange.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.phone}</td>
                        </tr>
            ))}
                </tbody>
            </table>
            <input type="text" value={this.state.search}
                onChange={this.updateSearch} />
            </div>
        )
    }
}

export default Users;