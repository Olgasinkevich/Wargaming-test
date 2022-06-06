import React, {useMemo} from 'react';
import Element from "./Element";
import '../styles/testStyle.css';
import ElementsSelection from "./ElementsSelection";


const AMOUNT_OF_ELEMENTS = 300;
export default function Elements ({selected, searchQuery}) {

        const elemList = useMemo(() => (new Array(AMOUNT_OF_ELEMENTS).fill('').map((_, i) => <Element
            onSelect={selected} text={`Элемент ${i + 1}`} key={`Элемент ${i + 1}`}/>)), [AMOUNT_OF_ELEMENTS]);

        return (
            <div className={'elements frame'}>
                {elemList}
            </div>
        )
    }


