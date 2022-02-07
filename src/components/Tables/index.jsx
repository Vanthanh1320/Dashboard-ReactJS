import React from "react";
import Table from "./Table";
import {projects} from '../data';
import {FaSearch,FaChevronLeft,FaChevronRight} from 'react-icons/fa';

function Tables() {
  return (
    <section  className="tables" data-index="2">
      <h2  className="title">Tables</h2>

      <div  className="tables-container bor-shaw">
        <div  className="tables-search">
          <FaSearch />
          <input type="search"  className="form-controll" placeholder="Search..." />
        </div>

        <Table projects={projects}/>

        <ul  className="panigation">
          <li  className="pagination-item">
            <FaChevronLeft />
          </li>

          <li  className="pagination-item page">1</li>
          <li  className="pagination-item ">2</li>
          <li  className="pagination-item">3</li>
          <li  className="pagination-item">4</li>
          <li  className="pagination-item">5</li>
          
          <li  className="pagination-item">
            <FaChevronRight />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Tables;
