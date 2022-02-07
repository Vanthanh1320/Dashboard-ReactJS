import React from 'react';
import {FaPen,FaTrash,FaEllipsisV} from 'react-icons/fa';

function Table({projects}){
    
    const handleClick =(e)=>{
        const actionList=document.querySelectorAll('.action-list')
        const btnAction=e.target
        const valueBtn=btnAction.dataset.index

        console.log(e);

        for(const action of actionList){
            const value=action.dataset.index;

            if(Number(value)===Number(valueBtn)){
                action.classList.add("show")
            }else if(action.classList.contains('show')){
                action.classList.remove('show')
            }
        }
       
    }

    return (
        <table  className="">
            <thead>
            <tr>
                <th>NAME</th>
                <th>PROJECT</th>
                <th>BUDGUT</th>
                <th>STATUS</th>
                <th></th>
            </tr>
            </thead>

            <tbody>
                {projects.map((project,index) =>{
                    const {name, nameProject, budgut, status,className} = project;

                    return (
                        <tr key={index}>
                            <td>{name}</td>
                            <td>{nameProject}</td>
                            <td>${budgut} USD</td>
                            <td>
                            <span  className={`status ${className}`}>{status}</span>
                            </td>
                            <td>
                                <span  className="action" onClick={handleClick} data-index={index}>
                                    <FaEllipsisV />
                                </span>
                
                                <ul className="action-list" data-index={index}>
                                    <li  className="action-item">
                                        <a href=""  className="action-link">
                                            <FaPen />
                                            <span>Edit</span>
                                        </a>
                                    </li>
                                    <li  className="action-item">
                                        <a href=""  className="action-link">
                                            <FaTrash />
                                            <span>Remove</span>
                                        </a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}

export default Table