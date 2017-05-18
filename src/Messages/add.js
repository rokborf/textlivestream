import React, { Component } from 'react';

class AddMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `text=${encodeURIComponent(this.state.text)}`
        };

        fetch(`http://localhost:8888/api/streams/${this.props.match.params.id}/messages`, request).then((response) => {
            return response.json();
        }).then(function(response) {
            console.log(response.message);

            this.setState({text: ''});
        }.bind(this));
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div className="add-message">
                <h4>Add message</h4>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.text} onChange={this.handleChange} className="add-message__input"/>
                    <button className="add-message__submit">Send</button>
                </form>
            </div>
        );
    }
}

export default AddMessage;