import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
export default function Editor(props) {
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);
    useEffect(() => {
        if (props.data != null) {
            setColumns(props.data[0]);
            setRows(props.data.slice(1, props.data.length));
        }
    }, [props.data]);
    return (
        <table>
            <thead>
                <tr>
                    {columns.length > 0 && columns.map((col) => <td>{col}</td>)}
                </tr>
            </thead>
            <tbody>
                {rows.length > 0 &&
                    rows.slice(0, 10).map((row) => {
                        //let array = JSON.parse(JSON.stringify(row));
                        //console.log(typeof array);

                        //turn array-like object into array
                        let cells = Object.entries(row).map((cell) => {
                            return cell[1];
                        });
                        console.log(cells);
                        let returnHTML = "";
                        cells.forEach(
                            (cell) => (returnHTML += `<td>${cell}</td>`)
                        );

                        return parse(`<tr>${returnHTML}</tr>`);
                    })}
            </tbody>
        </table>
    );
}
