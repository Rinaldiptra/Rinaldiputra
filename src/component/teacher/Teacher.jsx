import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
class Teacher extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                  <table class="table ">
  <thead class="thead-dark">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Mapel</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Ahmad Saputra</td>
      <td>cigombong,jawabarat</td>
      <td>Bahasa Italia</td>
      <td>
          <button type="button" class="btn btn-primary">Detail</button>
          <button type="button" class="btn btn-warning">Edit</button>
          <button type="button" class="btn btn-danger">Delete</button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Marsinah muad </td>
      <td>caringin,jawa barat</td>
      <td>Bahasa arab</td>
      <td>
          <button type="button" class="btn btn-primary">Detail</button>
          <button type="button" class="btn btn-warning">Edit</button>
          <button type="button" class="btn btn-danger">Delete</button>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Juminah putri ahmad</td>
      <td>cisalopa,banten barat</td>
      <td>Bahasa afrika</td>
      <td>
          <button type="button" class="btn btn-primary">Detail</button>
          <button type="button" class="btn btn-warning">Edit</button>
          <button type="button" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
<Link to="/" >Back</Link >
</div>
         );
    }
}
 
export default Teacher ;