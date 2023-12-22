import { useEffect, useState } from 'react';
import './TransactionTable.css'

function Transaction(props) {
    return <tr style={props.style}>
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
    //data = [{tr, color}]
    const [data, setdata] = useState([])

    function filldata() {
        if (props.trdata.length == 0)
            setdata([])
        else {
            let prvtr = {}
            let prvStyle = {backgroundColor:props.color2}
            let datacopy = []
            for (let i = 0; i < props.trdata.length; i++) {
                let tr = props.trdata[i]
                let cat = props.getCat(tr.Note)
                let newcolor = prvStyle.backgroundColor == props.color1 ? props.color2 : props.color1
                let style = {}
                if (i == 0 || (
                    (props.sortcol=="Category" &&  cat != props.getCat(prvtr.Note)) || 
                    (prvtr[props.sortcol] != tr[props.sortcol])
                )) {
                    style.backgroundColor = newcolor
                } else {
                    style.backgroundColor = prvStyle.backgroundColor
                }
                style.color = (style.backgroundColor == props.color1) ? props.textcolor1 : props.textcolor2
                datacopy.push({"tr":tr, "style":style, "cat":cat})
                prvtr = tr
                prvStyle = style
            }
            setdata(datacopy)
        }
    }
    useEffect(filldata, [props.trdata, props.color1, props.color2])
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
            {data.length == 0 ? <tr><td colSpan="8">No matching transactions</td></tr> : data.map((dataobj, i) => <Transaction key={i} tr = {dataobj.tr} cat={dataobj.cat} style={dataobj.style}/>)}

        </tbody>
    </table>
}

export default TransactionTable