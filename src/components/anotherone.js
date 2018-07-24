import React from 'react';
import data from './jsondata/./data.json';

class UsingMap extends React.Component {
    render() {
    return (
        <div>
        {
            data.map(function(movie){
                return <div>{movie.id} - {movie.title}</div>
            })
        }
        </div>
    )
    }
}

export default UsingMap;