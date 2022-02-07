import React from 'react'
import ChartCircle from './ChartCircle';
import ChartGuide from './ChartGuide';

function Charts(){

    return (
        <div className="dashboard-charts ">
            <div className="row charts__body ">
                <div className="col l-8 m-8 c-12">
                    <div className=" charts__body-left bor-shaw">
                        <div id="dashboard__chart-line">
                            <ChartGuide />
                        </div>
                    </div>
                </div>
            

                <div className="col l-4 m-4 c-12">
                    <div className="charts__body-right bor-shaw">
                        <div id="dashboard__chart-simple">
                            <ChartCircle />
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Charts