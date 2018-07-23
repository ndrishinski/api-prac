import React from 'react';

class ApiData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                })
            })
    }
        render() {
            var { items } = this.state;

                return (
                    <div>
                        <ul>
                            {items.map(item => (
                                <li key={item.id}>
                                    User: {item.userId} <br />
                                    Title: {item.title} <br />
                                    Body: {item.body} <hr />
                                </li>
                            ))};
                        </ul>
                    </div>
                )
            }
        }

export default ApiData;