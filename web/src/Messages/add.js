import React, { Component } from 'react';

class AddMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h4>Add messages:</h4>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Message:
                        <input type="text" value={this.state.text} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddMessage;