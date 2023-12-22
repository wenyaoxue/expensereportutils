import SummaryTableHolder from "./SummaryTableHolder"
// import OptDateSelector from "./OptDateSelector"
import { useEffect, useState } from "react"
import TransactionTableHolder from "./transactiontable/TransactionTableHolder"
function Display(props) {    
    const [tableholder, setTableholder] = useState(<SummaryTableHolder type="$"/>)
    const [optdateselector, setOptdateselector] = useState("")
    
    const changedispdd1 = (e) => {
        const dispdd1 = document.querySelector("#dispdd1")
        const dispdd2 = document.querySelector("#dispdd2")
        if (dispdd1.value == "Summary") {
            dispdd2.innerHTML = "<option>" + ["$", "$/day", "transactions", "transactions/day"].join("</option><option>") + "</option>"
            setOptdateselector("")
            setTableholder(<SummaryTableHolder type="$"/>)
        } else {
            dispdd2.innerHTML=""
            setTableholder(<TransactionTableHolder color1={props.color1} color2={props.color2} textcolor1={props.textcolor1} textcolor2={props.textcolor2}/>)
        }
    }
    useEffect(changedispdd1, [props.color1, props.color2])
    const changedispdd2 = (e) => {
        const dispdd1 = document.querySelector("#dispdd1")
        const dispdd2 = document.querySelector("#dispdd2")
        if (dispdd1.value == "Summary") {
            setTableholder(<SummaryTableHolder type={dispdd2.value}/>)
        } else {
        }
    }
    
    return <div>

        <select id="dispdd1" onChange={(e)=>{changedispdd1(e)}}>
            <option>Summary</option>
            <option>Transactions</option>
        </select>

        <select id="dispdd2" onChange={(e)=>{changedispdd2(e)}}>
            <option>$</option>
            <option>$/day</option>
            <option>transactions</option>
            <option>transactions/day</option>
        </select>
        {optdateselector}

        <script src = "display.js"></script>
        
        {tableholder}
    </div>
}

export default Display