import React from 'react';
import {Jumbotron} from 'react-bootstrap';

export default class Bienvenue extends React.Component {
render() {
return (
<div className="">

<div className="container-fluid bg-dark text-light p-5">
    <div className="container bg-dark p-5">
        <h1 className="display-4">Nos modules les plus utilisés</h1>
        <hr/>
        <p>Accéder à la liste des modules</p>
        <a href="/list" className="btn btn-primary"> Accéder</a>
    </div>
</div>
</div>
);
}
}