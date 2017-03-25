import * as React from "react";
import { render } from "react-dom";

import HelloWorld from "./components/HelloWorld";

class Application extends React.Component<undefined, undefined> {
    render() {
        return (
            <div>
                <h1>Hello React!</h1>
                <HelloWorld
                    compiler="Typescript"
                    framework="React" />
            </div>
        );
    }
}

render(<Application />, document.getElementById("application"));
