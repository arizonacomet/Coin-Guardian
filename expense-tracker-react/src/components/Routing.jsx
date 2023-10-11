import {Routes, Route} from 'react-router-dom';
import Home from '../Home';
import Login from './Login';
function Routing(){
    return(<>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>

        </Routes>
    </>)
}
export default Routing;
