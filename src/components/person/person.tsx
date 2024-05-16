import React from "react";
import './Person.css'

interface Props{
    numberFirstLot:number;
    numberSecondLot:number;
    numberThirdLot:number;
    numberFourthLot:number;
    numberFifthLot:number;
}

const Lottery:React.FC<Props> = ({
      numberFirstLot,
      numberSecondLot,
      numberThirdLot,
      numberFourthLot,
      numberFifthLot
}) => {
    return (
        <div className="number-all">
            <span className="number-lot">{numberFirstLot}</span>
            <span className="number-lot">{numberSecondLot}</span>
            <span className="number-lot">{numberThirdLot}</span>
            <span className="number-lot">{numberFourthLot}</span>
            <span className="number-lot">{numberFifthLot}</span>
        </div>
    );
};

export default Lottery;