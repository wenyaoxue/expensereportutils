import { useEffect, useState } from "react"
import TransactionTable from "./TransactionTable";
import DateRangePick from "../DateRangePick";
function TransactionTableHolder(props) {
  const [trdata_all, setTrdata_all] = useState([])
  const [trdata_disp, settrdata_disp] = useState([])
  const [catdata, setCatdata] = useState({})
  const [sortcol, setsortcol] = useState("Date")

  const [startdate, setStartdate] = useState("2023-01-01")
  const [enddate, setEnddate] = useState("2023-12-31")
  const [daterangepickvar, setdaterangepickvar] = useState(<DateRangePick setStartdate={setStartdate} setEnddate={setEnddate}/>)
  const [amtmin, setAmtmin] = useState("")
  const [amtmax, setAmtmax] = useState("")
  const [catfilter, setCatfilter] = useState("")
  const [unkfilter, setUnkfilter] = useState(false)
  const [dtlsfilter, setDtlsfilter] = useState("")

  const getData = () => {
    fetch('expensereports/nov2023.json'
      , { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }
    )
      .then(function (trResponse) { return trResponse.json(); })
      .then(function (trJson) {
        fetch('categories.json'
          , { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }
        )
          .then(function (catResponse) { return catResponse.json(); })
          .then(function (catJson) {
            setTrdata_all(trJson)
            settrdata_disp(trJson)
            setCatdata(catJson)
            document.querySelector("#catselect").innerHTML = ""
            let newopt_ = document.createElement("option")
            newopt_.key = ""
            newopt_.value = ""
            newopt_.innerHTML = ""
            document.querySelector("#catselect").appendChild(newopt_)
            let catkeys = Object.keys(catJson)
            catkeys.sort()
            for (let i = 0; i < catkeys.length; i++) {
              let cat = catkeys[i]
              let newopt = document.createElement("option")
              newopt.key = cat
              newopt.value = cat
              newopt.innerHTML = cat
              document.querySelector("#catselect").appendChild(newopt)
            }
            let newopt = document.createElement("option")
            newopt.key = "other"
            newopt.value = "other"
            newopt.innerHTML = "other"
            document.querySelector("#catselect").appendChild(newopt)
          });
      });
  }
  function setDateSelect() {
    const dateselect = document.querySelector("#dateselect")
    let montharr = ["Custom","All","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let monthval = ["Custom", "All", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
    let monthnum = ["", "", "31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"]
    dateselect.innerHTML = ""
    for (let i = 0; i < montharr.length; i++)
      dateselect.innerHTML+= "<option value='"+monthval[i]+":"+monthnum[i]+"'>" + montharr[i] + "</option>"
  }
  useEffect(() => {
    getData()
    setDateSelect()
  }, [])

  
  function selectDate(e) {
    const dateselect = document.querySelector("#dateselect")
    if (dateselect.value == "Custom:") {
      setStartdate("2023-01-01")
      setEnddate("2023-12-31")
      setdaterangepickvar(<DateRangePick setStartdate={setStartdate} setEnddate={setEnddate}/>)
    } else if (dateselect.value == "All:") {
      setdaterangepickvar("")
      setStartdate("2023-01-01")
      setEnddate("2023-12-31")
    } else {
      setdaterangepickvar("")
      let [month, day] = dateselect.value.split(":")
      let startdatestr = "2023-"+month+"-01"
      let enddatestr = "2023-"+month+"-"+day
      setStartdate(startdatestr)
      setEnddate(enddatestr)
    }
  }
  function checkChronfilter(tr) {
    let checkDate = new Date(makeDateStr(tr.Date, tr.Time))
    return ( new Date(startdate+"T00:00:00") < checkDate && checkDate <= new Date(enddate+"T23:59:59") )
  }
  function checkAmtfilter(tr) {
    let amt = parseFloat(tr.Amount)
    return (amtmin == "" || amtmin <= amt) && (amtmax == "" || amt <= amtmax)
  }
  function checkCatfilter(tr) {
    return catfilter == "" || getCat(tr.Note) == catfilter
  }
  function checkUnkfilter(tr) {
    return !unkfilter || tr.Unknown != ""
  }
  function checkDtlsfilter(tr) {
    return dtlsfilter == "" || tr["Details on"].toUpperCase().includes(dtlsfilter.toUpperCase())
  }
  function chronCompare(a, b) {
    var keyA = new Date(makeDateStr(a.Date, a.Time)),
        keyB = new Date(makeDateStr(b.Date,b.Time));
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
  }
  function catCompare(a, b) {
    var keyA = getCat(a.Note), 
        keyB = getCat(b.Note);
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  }
  function amtCompare(a, b) {
    var keyA = a.Amount,
        keyB = b.Amount;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  }
  function noteCompare(a, b) {
    var keyA = a.Note,
        keyB = b.Note;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  }
  function makedisp() {
    let trdataCopy = []
    trdata_all.forEach((tr) => {
      if (checkChronfilter(tr) && checkAmtfilter(tr) && checkCatfilter(tr) && checkUnkfilter(tr) && checkDtlsfilter(tr))
        trdataCopy.push(JSON.parse(JSON.stringify(tr)))
    })

    if (sortcol == "Date")
      trdataCopy.sort(chronCompare)
    else if (sortcol == "Category")
      trdataCopy.sort(catCompare)
    else if (sortcol == "Amount")
      trdataCopy.sort(amtCompare)
    else if (sortcol == "Note")
      trdataCopy.sort(noteCompare)
    settrdata_disp(trdataCopy)
  }
  useEffect(makedisp, [startdate, enddate, amtmin, amtmax, catfilter, unkfilter, dtlsfilter, sortcol])

  function makeDateStr(date, time) {
    let [month, day, year] = date.split("/")
    let [hr, min, sec] = "23:59:59".split(":")
    if (time.length > 0)
      [hr, min] = time.split(":")
    return year + "-" + month.padStart(2, '0') + "-" + day.padStart(2, '0') + "T" + hr.padStart(2, '0') + ":" + min.padStart(2, '0') + ":" + sec.padStart(2, '0')
  }


  function getCat(note) {
    for (let cat in catdata) {
      let catprchs = catdata[cat].purchases
      for (let i = 0; i < catprchs.length; i++)
          if (note.includes(catprchs[i])) {
            return cat
          }
    }
    return "other"
  }

  function savesearch(e) {
    //https://spin.atomicobject.com/2022/03/09/create-export-react-frontend/
    let name = document.querySelector("#searchname").value
    let searchJSON = {name, sortcol, startdate, enddate, amtmin, amtmax, catfilter, unkfilter, dtlsfilter}
    const fileData = JSON.stringify(searchJSON)
    const blob = new Blob([fileData], {type:"text/plain"})
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    
    link.download = "savedsearches.json";
    link.href = url;
    link.click();
    console.log("saved somewhere")
  }
  

  return <div>
    <div>
      <h1 style={{display:"inline-block"}}>Transactions</h1>
      <h2 style={{display:"inline-block"}}>{startdate} to {enddate}</h2>
      <br></br>
    </div>
    <div style={{ display: "inline-block", width: "80%", maxHeight:"550px", overflowY:"scroll"}}>
      <TransactionTable trdata={trdata_disp} getCat={getCat} sortcol={sortcol} color1={props.color1} color2={props.color2} textcolor1={props.textcolor1} textcolor2={props.textcolor2}/>
    </div>
    <div style={{ display: "inline-block", verticalAlign:"top" }}>
      <button onClick={(e)=>setsortcol("Date")}>Chronological Sort</button><br></br>
      <button onClick={(e)=>setsortcol("Amount")}>$ Amount Sort</button><br></br>
      <button onClick={(e)=>setsortcol("Category")}>Categorical Sort</button><br></br>
      <button onClick={(e)=>setsortcol("Note")}>Note Sort</button>
      <br></br><br></br>
      <div style={{backgroundColor:"lemonchiffon", border:"1px solid black", padding:"1px"}}>
        Date Range <select id="dateselect" onChange={selectDate}></select>
        {daterangepickvar}
      </div>
      $ min<input id="amtmininput" type='number' onKeyUp={(e) => setAmtmin(e.currentTarget.value == "" ? "" : parseFloat(e.currentTarget.value))} defaultValue={""}></input>
      <br></br>
      $ max<input id="amtmaxinput" type='number' onKeyUp={(e) => setAmtmax(e.currentTarget.value == "" ? "" : parseFloat(e.currentTarget.value))} defaultValue={""}></input>
      <br></br>  
      Category <select id="catselect" onChange={(e)=>setCatfilter(document.querySelector("#catselect").value)}></select>
      <br></br>
      Unknown <select onChange={(e)=>setUnkfilter(e.currentTarget.value == "true")}><option value="false"></option><option value="true">Filter</option></select>
      <br></br>
      Details on <select onChange={(e)=>setDtlsfilter(e.currentTarget.value)}><option></option><option>Chase</option><option>Discover</option><option>Cash</option><option>Venmo</option></select>
      <br></br><br></br>
      <input id="searchname"></input><button onClick={savesearch}>Name and Save Search</button>
    </div>

  </div>
}

export default TransactionTableHolder