import * as React from "react";

export interface HelloWorldProps {
    compiler: string;
    framework: string;
}

export default class HelloWorld extends React.Component<HelloWorldProps, undefined> {

    render() {
        return (
            <h2>Hello from {this.props.compiler} and {this.props.framework}!</h2>
        );
    }
}
