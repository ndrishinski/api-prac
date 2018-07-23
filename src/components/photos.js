import React from 'react';

class Photos extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        photos: []
    }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(sucker => {
            console.log(sucker)
            this.setState({ photos: sucker})
        })
    }
    render() {
        return(
            <div>
                {this.state.photos.map(photo => (
                    <div key={photo.id}>
                        <img src={photo.thumbnailUrl} />
                    </div>
                ))}
            </div>
        )
    }
}

export default Photos;