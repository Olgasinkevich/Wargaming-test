import React, {useMemo} from 'react';
import Element from "./Element";
import '../styles/testStyle.css';


const DEFAULT_ELEMENTS = new Array(300).fill('').map((_, i) => `Элемент ${i + 1}`);
export default function Elements ({selected, minNumber, searchQuery}) {

        const elemList = useMemo(() =>
            DEFAULT_ELEMENTS.slice(minNumber)
                .filter((item)=> item.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((item) => <Element
            onSelect={selected} text={item} key={item}/>), [ minNumber, selected, searchQuery]);

        return (
            <div className={'elements frame'}>

                {elemList}
            </div>
        )
    }


