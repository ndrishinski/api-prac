import React from 'react';
import data from './jsondata/./family.json';

class Family extends React.Component {
    constructor(props) {
    super(props) 
    this.state = { search: '' }
    this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch(event) {
        this.setState({
            search: event.target.value.substr(0, 10)
        })
    }

    render() {

        return (
            <div>
            <table>
               <tbody> 
                   <tr>
                       <th>Name</th>
                       <th>Age</th>
                       <th>Spouse</th>
                       <th>Children</th>
                   </tr>
                    {
                        data.map(function(brothers) {
                            return (
                                <tr key={brothers.id}>
                                    <td>{brothers.name}</td>
                                    <td>{brothers.Age}</td>
                                    <td>{brothers.Spouse}</td>
                                    <td>{brothers.Children}</td>
                                 </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <input type="text" 
                value={this.state.search}
                onChange={this.updateSearch}/>
            </div>
        )
    }
}

export default Family;