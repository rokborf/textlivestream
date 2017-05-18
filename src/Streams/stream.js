import React, { Component } from 'react';
import moment from 'moment';

class Stream extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        fetch(`http://localhost:8888/api/streams/${this.props.match.params.id}`).then((response) => {
            return response.json();
        }).then(function(response) {
            this.setState( response );
        }.bind(this));
    }

    render() {
        return (
            <div>
                <a href="/" className="back-link">Back to stream list</a>
                <div className="stream-header">
                    <h2>{this.state.title}</h2>
                    <div className="stream-header__date">{moment(this.state.startDate).format('MMMM Do YYYY, HH:mm')}</div>
                    <p>{this.state.description}</p>
                </div>
            </div>
        );
    }
}

export default Stream;