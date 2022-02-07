import React from 'react';
import ChartColumn from './ChartColumn';
import ChartLine from './ChartLine';
import ChartPie from './ChartPie';
import ChartScatter from './ChartScatter';


function Charts() {
    return (
        <section className="charts " data-index='3'>
        <h2 className="title">Chart</h2>

        <div className="charts-box row">
            <div className="col l-7 m-7 c-12">
                <div className="charts-left bor-shaw">
                    <div id="charts-line">
                        <ChartLine />
                    </div>
                </div>
            </div>
          
            <div className="col l-5 m-5 c-12">
                <div className="charts-right bor-shaw">
                    <div id="charts-column">
                        <ChartColumn />
                    </div>
                </div>
            </div>
          
        </div>

        <div className="charts-box row">
            <div className="col l-7 m-7 c-12">
                <div className="charts-left with-box-left bor-shaw">
                    <div id="charts-scatter">
                        <ChartScatter />
                    </div>
                </div>
            </div>
            
            <div className="col l-5 m-5 c-12">
                <div className="charts-right with-box-right bor-shaw">
                    <div id="charts-pie">
                        <ChartPie />
                    </div>
                </div>
            </div>
          
        </div>

    </section>
    );
}

export default Charts;