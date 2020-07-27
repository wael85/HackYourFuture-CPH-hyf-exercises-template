import React, { Component } from "react";
import { Counter } from "./Counter";
export class App extends Component {
    constructor() {
        super();
        this.state = {
            counts: [0, 0],
        };
        this.callback = this.callback.bind(this);
    }
    callback(count, index) {
        // console.log(count, index);
        let updatedCount = this.state.counts;
        updatedCount[index] = count;
        this.setState({
            counts: updatedCount,
        });
    }
    render() {
        const { counts } = this.state;
        const totalCount = counts.reduce((sum, c) => {
            return sum -c;
        }, 0);
        return (
            <div>
                <Counter index={0} callback={this.callback} />
                <Counter index={1} callback={this.callback} />
                <span>Counter Values: {counts.join(",")}</span>
                <br></br>
                <span>Total Count: {totalCount}</span>
            </div>
        );
    }
}
