import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

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
                <h2>Select stream</h2>
                <ul>
                    {this.state.streams.map(stream =>
                        <li key={stream._id} className="stream-list-item">
                            <div className="stream-list-item__date"><strong>Starts:</strong> {moment(stream.date).format('MMMM Do YYYY, HH:mm')}</div>
                            <Link to={`/${stream._id}/messages`} className="stream-list-item__link">{stream.title}</Link>
                            <p className="stream-list-item__description">{stream.description}</p>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Streams;