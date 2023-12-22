import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Mission from './Mission';
import Display from './Display';

function RouteDefs(props) {
    return <BrowserRouter>
        <Routes>
            <Route path='/mission' element={<Mission/>}/>
            <Route path='/' element={<Display color1={props.color1} color2={props.color2} textcolor1={props.textcolor1} textcolor2={props.textcolor2}/>}/>
        </Routes>
    </BrowserRouter>
}

export default RouteDefs