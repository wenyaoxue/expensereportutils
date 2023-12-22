
import './Header.css'
function Header(props) {
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }

    function chooseColor1(e) {
        props.setColor1(e.currentTarget.value)
        let rgb = hexToRgb(e.currentTarget.value)
        let textcol = (rgb.r*0.299 + rgb.g*0.587 + rgb.b*0.114) > 186 ? "#000000" : "#FFFFFF"
        document.querySelector("#textcol1").style.backgroundColor=textcol
        props.setTextColor1(textcol)
    }
    function chooseColor2(e) {
        props.setColor2(e.currentTarget.value)
        let rgb = hexToRgb(e.currentTarget.value)
        //Mark Ransom's answer https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
        let textcol = (rgb.r*0.299 + rgb.g*0.587 + rgb.b*0.114) > 186 ? "#000000" : "#FFFFFF"
        document.querySelector("#textcol2").style.backgroundColor=textcol
        props.setTextColor2(textcol)
    }
    return <div>
        <a href="/mission">Soli Deo Gloria: my mission</a>
        <a href="/">Home</a>
        <input type="color" defaultValue="#FFFACD" onChange={chooseColor1}></input>
        <div id="textcol1" className="colFB"></div>
        <input type="color" defaultValue="#E0FFFF" onChange={chooseColor2}></input>
        <div id="textcol2" className="colFB"></div>
    </div>
}

export default Header