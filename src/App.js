import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import './App.css';
import Bienvenue from './Components/Bienvenue';
import Module from './Components/Module';
import Modulelist from './Components/Modulelist';
import ItemList from './Components/ItemList';

import Navigationbar from './Components/Navigationbar';
import EditModule from './Components/EditModule';

class App extends Component {
render(){
return (
<Router>
<Navigationbar />
<Routes>
<Route exact path="/" element={<Bienvenue />}/>
<Route exact path="/add" element={<Module />}/>
<Route exact path="/item" element={<ItemList />}/>

<Route exact path="/list" element={<Modulelist />}/>
<Route  path='/update/:id' element={ <EditModule/> }>

</Route>




</Routes>
</Router>
);
}
}
export default App;
