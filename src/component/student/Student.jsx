
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div>
               <table class="table ">
  <thead class="thead-dark">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Rinaldi Putra</td>
      <td>Rnldiptra08</td>
      <td>************</td>
      <td>
          <button type="button" class="btn btn-primary">Detail</button>
          <button type="button" class="btn btn-warning">Edit</button>
          <button type="button" class="btn btn-danger">Delete</button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Khania Adila </td>
      <td>khnidil</td>
      <td>************</td>
      <td>
          <button type="button" class="btn btn-primary">Detail</button>
          <button type="button" class="btn btn-warning">Edit</button>
          <button type="button" class="btn btn-danger">Delete</button>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Syaiful hadad</td>
      <td>fuldad</td>
      <td>**************</td>
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

export default Student;