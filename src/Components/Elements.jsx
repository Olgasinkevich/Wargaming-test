import React, {useMemo} from 'react';
import Element from "./Element";
import '../styles/testStyle.css';


const DEFAULT_ELEMENTS = new Array(300).fill('').map((_, i) => `Элемент ${i + 1}`);
export default function Elements ({selected, minNumber, searchQuery, disabled}) {

        const elemList = useMemo(() =>
            DEFAULT_ELEMENTS.slice(minNumber)
                .filter((item)=> item.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((item) => <Element
            onSelect={selected} text={item} key={item} disabled ={disabled} />), [ minNumber, selected, searchQuery,disabled]);

        return (
            <div className={'elements frame'}>

                {elemList}
            </div>
        )
    }


