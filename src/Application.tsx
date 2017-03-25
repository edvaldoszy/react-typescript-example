import * as React from "react";
import { render } from "react-dom";

import HelloWorld from "./components/HelloWorld";
import GenericTable from "./components/GenericTable";

class Application extends React.Component<undefined, undefined> {

    bindTableRow(item, k) {
        return (
            <tr key={k}>
                <td>{item.codigo}</td>
                <td>{item.nome}</td>
                <td>{item.telefone}</td>
                <td>{item.email}</td>
            </tr>
        );
    }

    buildTableDataSource() {
        return [
            {
                codigo: 1,
                nome: "Edvaldo Szymonek 1",
                telefone: "+55 44 98765-4321",
                email: "edvaldoszy@gmail.com"
            },
            {
                codigo: 2,
                nome: "Edvaldo Szymonek 2",
                telefone: "+55 44 98765-4321",
                email: "edvaldoszy@gmail.com"
            }
        ];
    }

    render() {
        return (
            <div>
                <h1>Hello React!</h1>
                <HelloWorld
                    compiler="Typescript"
                    framework="React" />
                
                <GenericTable
                    bindTableRow={this.bindTableRow.bind(this)}
                    dataSource={this.buildTableDataSource()} />
            </div>
        );
    }
}

render(<Application />, document.getElementById("application"));
