import { useEffect, useState } from 'react';
import './TransactionTable.css'

function Transaction(props) {
    //props.prvtr, props.sortcol
    const [style, setStyle] = useState({backgroundColor:props.color1})
      useEffect(() => {
            if (
                props.prvtr == null || 
                (
                    (props.sortcol=="Category" &&  props.cat != props.prvcat) || 
                    (props.prvtr[props.sortcol] != props.tr[props.sortcol])
                )
            )
                    setStyle({backgroundColor:props.color2})
            else
                setStyle({backgroundColor:props.color1})
        }, [props.tr, props.prvtr, props.sortcol])

    return <tr style={style}>
        <td>{props.tr.Date}</td>
        <td>{props.tr.Time}</td>
        <td>{props.tr.Type == "R" ? props.tr.Amount : ""}</td>
        <td>{props.tr.Type == "P" ? props.tr.Amount : ""}</td>
        <td>{props.cat}</td>
        <td>{props.tr.Note}</td>
        <td>{props.tr.Unknown}</td>
        <td>{props.tr["Details on"]}</td>
    </tr>
}

function TransactionTable(props) {
    return <table>
        <tbody>
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Received</th>
                <th>Paid</th>
                <th>Category</th>
                <th>Note</th>
                <th>Unknown</th>
                <th>Details on</th>

            </tr>
            {props.trdata.length == 0 ? <tr><td>No matching transactions</td></tr> : props.trdata.map((transaction, index) => <Transaction key={index} tr={transaction} cat={props.getCat(transaction.Note)} prvtr={props.trdata[index-1]} prvcat={index > 0 ? props.getCat(props.trdata[index-1].Note) : ""} sortcol={props.sortcol} color1={props.color1} color2={props.color2}/>)}
        </tbody>
    </table>
}

export default TransactionTable