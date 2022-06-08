import React, {useMemo} from 'react';
import Element from "./Element";
import '../styles/testStyle.css';


const DEFAULT_ELEMENTS = new Array(300).fill('').map((_, i) => `Элемент ${i + 1}`);
export default function Elements ({selected, minNumber}) {

        const elemList = useMemo(() => DEFAULT_ELEMENTS.slice(minNumber).map((item) => <Element
            onSelect={selected} text={item} key={item}/>), [ minNumber, selected]);

        return (
            <div className={'elements frame'}>
                {console.log(minNumber)}
                {elemList}
            </div>
        )
    }


