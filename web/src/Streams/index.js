import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Streams extends Component {
    constructor(props) {
        super(props);

        this.state = {
            streams: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8888/api/streams').then((response) => {
            return response.json();
        }).then(function(response) {
            const streams = response;
            this.setState({ streams });
        }.bind(this));
    }

    render() {
        return (
            <div>
                <h2>Streams:</h2>
                <ul>
                    {this.state.streams.map(stream =>
                        <li key={stream._id}><Link to={`/streams/${stream._id}/messages`}>{stream.title}</Link></li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Streams;