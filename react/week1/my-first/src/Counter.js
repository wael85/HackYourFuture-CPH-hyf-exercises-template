import React, { Component } from "react";
export class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
        this.increaseCount = this.increaseCount.bind(this);
    }
    increaseCount() {
        const updatedCount = this.state.count + 1;
        this.setState({
            count: updatedCount,
        });
        const { callback, index } = this.props;
        callback(updatedCount, index);
    }
    render() {
        const { count } = this.state;
        const { index } = this.props;
        return (
            <div>
                <span>{`Counter ${index}`}</span>
                <button onClick={this.increaseCount}>{count}</button>
            </div>
        );
    }
}