import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import CreateandsharecComp from './component/CreateandsharecComp';
import ListStudent from './component/ListStudent';
import InfoStudent from './component/InfoStudent';

class App extends Component{
  render(){
    return (
      <div className="App">
        <div className="row">
    <div className="col-lg-7 grid-margin stretch-card">
      <div className="card">
        {/* START CONTROL */}
       <CreateandsharecComp></CreateandsharecComp>
        {/* END CONTROL */}
        {/* START LIST STUDENT */}
        <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <ListStudent></ListStudent>
        <ListStudent></ListStudent>
        <ListStudent></ListStudent>
      </div>
        {/* END LIST STUDENT */}
      </div>
    </div>
    {/* START FORM SINH VIEN */}
      <InfoStudent></InfoStudent>
    {/* END FORM SINH VIÊN */}
  </div>
  
      </div>
    );
  }

}

export default App;
