function DateRangePick(props) {
    return <div>
        Start Date<input id="startdate" type='date' onChange={(e) => props.setStartdate(e.currentTarget.value)} defaultValue={"2023-01-01"}></input>
        <br></br>
        End Date <input id="enddate" type='date' onChange={(e) => props.setEnddate(e.currentTarget.value)} defaultValue={"2023-12-31"}></input>
    </div>
}

export default DateRangePick
