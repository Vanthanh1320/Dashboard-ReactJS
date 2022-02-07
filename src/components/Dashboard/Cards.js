import React from 'react-dom';

function Cards({cards}) {


    return (
        <div className="dashboard-cards">
            <div className="cards-list row ">
                    {cards.map((card, index) =>{
                        const { des,number,icon,classname} = card

                        return(
                            <div className="col l-3 m-6 c-12" key={index}>
                                <div className={`cards-item ${classname}`}>
                                    <div className="cards-logo">
                                        {icon}
                                    </div>
                                    <h3 className="cards-number">{number}</h3>
                                    <p className="cards-des">{des}</p>
                                </div>
                            </div>
                        )
                    })}
                    
            </div>

        </div>
    )
}

export default Cards;