import React, { Component } from 'react';
import Websocket from 'react-websocket';
import moment from 'moment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
            <div className="stream">
                <Websocket url={`ws://localhost:8080/${this.props.match.params.id}`} onMessage={this.handleData.bind(this)}/>

                {this.state.messages.slice(0).reverse().map(message =>
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false} key={message._id}>
                        <div className="message">
                            <div className="message__date">
                                {moment(message.postDate).format('MMMM Do YYYY, HH:mm')}
                            </div>
                            <div className="message__text">
                                {message.text}
                            </div>
                        </div>
                    </ReactCSSTransitionGroup>
                )}
            </div>
        );
    }
}

export default Messages;