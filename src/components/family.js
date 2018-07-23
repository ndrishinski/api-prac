import React from 'react';
import data from './family.json';

class Family extends React.Component {
    render() {
        return (
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
        )
    }
}

export default Family;