import * as React from "react";

export interface GenericTableProps {
    bindTableRow: Function;
    dataSource: object[];
}

export default class GenericTable extends React.Component<GenericTableProps, undefined> {

    private style: React.CSSProperties = {
        boder: "1px",
        borderColor: "#f0f"
    };

    private _bindTableRow;
    private dataSource;

    constructor(props) {
        super(props);

        if (props.bindTableRow && props.bindTableRow instanceof Function) {
            this._bindTableRow = props.bindTableRow || function() {};
        } else {
            throw new Error("Parameter bindTableRow must be a function");
        }

        if (props.dataSource && Array.isArray(props.dataSource)) {
            this.dataSource = props.dataSource || [];
        } else {
            throw new Error("Parameter dataSource must be an array");
        }
    }

    private renderTableHeadRows() {
        return (
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Telefone</th>
                <th>E-mail</th>
            </tr>
        );
    }

    private renderTableHead() {
        return (
            <thead>
                {this.renderTableHeadRows()}
            </thead>
        );
    }

    private renderTableBodyRows() {
        var self = this;

        var rows = [];
        this.dataSource.forEach((item, k) => {
            var item = self.dataSource[k];
            rows.push(self._bindTableRow(item, k, self));
        });
        return rows;
    }

    private renderTableBody() {
        return (
            <tbody>
                {this.renderTableBodyRows()}
            </tbody>
        );
    }

    render() {
        return (
            <table style={this.style}>
                {this.renderTableHead()}
                {this.renderTableBody()}
            </table>
        );
    }
}
