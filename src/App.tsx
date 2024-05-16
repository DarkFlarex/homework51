import './App.css'
import Lottery from "./components/person/person";
import {useState} from "react";

interface Inumbers {
    numberFirstLot:number;
    numberSecondLot:number;
    numberThirdLot:number;
    numberFourthLot:number;
    numberFifthLot:number;
}

const App = () => {
    const [allNumbers, setAllNumbers] = useState<Inumbers[]>([
        {
            numberFirstLot:5,
            numberSecondLot:11,
            numberThirdLot: 16,
            numberFourthLot:23,
            numberFifthLot: 32
        }
    ]);

    const generateNewNumbers = () => {
        const numbers: number[] = [];
        while (numbers.length < 5) {
            const randomNumber = Math.floor(Math.random() * 32) + 5;
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }
        const sortedNumbers = numbers.sort((a, b) => a - b);
        return {
            numberFirstLot: sortedNumbers[0],
            numberSecondLot: sortedNumbers[1],
            numberThirdLot: sortedNumbers[2],
            numberFourthLot: sortedNumbers[3],
            numberFifthLot: sortedNumbers[4]
        };
    };

    const changeNumberForLottery = () => {
        const newNumbers = generateNewNumbers();
        setAllNumbers([newNumbers]);
    };

    return (
        <>
            <div className="lottery">
                <button className="button-number" type="button" onClick={changeNumberForLottery}>New numbers</button>
                <Lottery
                    numberFirstLot={allNumbers[0].numberFirstLot}
                    numberSecondLot={allNumbers[0].numberSecondLot}
                    numberThirdLot={allNumbers[0].numberThirdLot}
                    numberFourthLot={allNumbers[0].numberFourthLot}
                    numberFifthLot={allNumbers[0].numberFifthLot}
                />
            </div>
        </>
    )
}

export default App
