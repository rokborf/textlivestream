import React, { Component } from 'react';
import Websocket from 'react-websocket';
import moment from 'moment';

class Messages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };
    }

    handleData(data) {
        var newMessages = this.state.messages;

        newMessages.push(JSON.parse(data));

        this.setState({
            messages: newMessages
        });
    }

    componentDidMount() {
        fetch(`http://localhost:8888/api/streams/${this.props.match.params.id}/messages`).then((response) => {
            return response.json();
        }).then(function(response) {
            const messages = response;
            this.setState({ messages });
        }.bind(this));
    }

    render() {
        return (
            <div>
                <h4>Messages:</h4>
                <Websocket url={`ws://localhost:8080/${this.props.match.params.id}`} onMessage={this.handleData.bind(this)}/>

                {this.state.messages.slice(0).reverse().map(message =>
                    <div key={message._id}>
                        {moment(message.postDate).format('MMMM Do YYYY, HH:mm')} - {message.text}
                    </div>
                )}
            </div>
        );
    }
}

export default Messages;