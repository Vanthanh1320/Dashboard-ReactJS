import React from 'react';

function Others({tasks}){

    const handleCheck=(e)=>{
        console.log(e);
        const parent= e.target.parentElement;
        // console.log(parent);
        if(parent && (e.target.checked===true)){
            parent.classList.add('done')
        }else{
            parent.classList.remove('done')
        }
    }

    return(
        <div className="dashboard-others">
            <div className="others__body row">
                <div className="col l-5 m-5 c-12">
                    <div className="others__body-left bor-shaw">
                        <div className="others__head">
                            <h2 className="others__name">Social traffic</h2>
                        </div>

                        <div className="others__table">
                            <table className="">
                                <thead>
                                    <tr>
                                        <th>REFERRAL</th>
                                        <th>VISITORS</th>
                                        <th>ACCESS RATE</th>
                                    </tr>
                                
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Facebook</td>
                                        <td>1,480</td>
                                        <td>60%</td>
                                    </tr>
                                    <tr>
                                        <td>Google</td>
                                        <td>5,480</td>
                                        <td>54%</td>
                                    </tr>
                                    <tr>
                                        <td>Linkedln</td>
                                        <td>4,807</td>
                                        <td>38%</td>
                                    </tr>
                                    <tr>
                                        <td>Instagram</td>
                                        <td>3,758</td>
                                        <td>52%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div className="col l-7 m-7 c-12">
                    <div className=" others__body-right bor-shaw">
                        <div className="others__head">
                            <h2 className=" others__name">Task</h2>
                        </div>

                        <div className="others__boxcheck">
                            {tasks.map(task =>{
                                const {id,taskname} = task
                                
                                return (
                                    <div className="others__checkitem" key={id}>
                                        {/* <input className="others__check" type="checkbox" 
                                            id={id} 
                                            name="task" 
                                            onChange={handleCheck}    
                                        />
                                        <span class="geekmark"></span>
                                        <label className="others__checklabel">{taskname}</label> */}

                                        <label class="main-check">
                                            <input type="checkbox" 
                                                class="form-check-input" 
                                                id="rememberMe" 
                                                name="task" 
                                                onChange={handleCheck} />
                                            <span class="geekmark"></span>
                                                <label class="form-check-label" for="rememberMe">
                                                </label>

                                        <label className="others__checklabel">{taskname}</label>

                                        </label>

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
    )
}

export default Others;