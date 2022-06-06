import React, {useCallback, useState, useMemo} from 'react';


const BURGER_POINTS = {
    tanks: 'World of Tanks',
    warplanes: 'World of Warplanes',
    warships: 'World of Warships',
};

const Burger = () => {

    const [selectedValue, setSelectedValue] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const select = useCallback(() => {
        setSelectedValue(!selectedValue);
       /* value = valueInput;
        selectedValue ? value = {valueInput} : value = {BURGER_POINTS['tanks']};*/
    }, [selectedValue, setSelectedValue]);


    const openMenu = useCallback(() => {

            setIsOpen(!isOpen)
        }, [isOpen, setIsOpen]
    );

    const optionStyle = useMemo(() => {
        return isOpen ? "list-items input" : "list-items input closed";

    }, [isOpen]);

    return (
        <div className="hamburger-wrapper">

            <button onClick={openMenu} className={!isOpen ? "hamburger" : "hamburger closed"}>
                <span className="hamburger-line"></span>
            </button>

            <div className="hamburger-list frame" defaultValue={'Tanks'}>
                <input className={isOpen ? "list-items input closed" : "list-items"} type="button" value='World of Tanks'></input>
                <label className={optionStyle}>
                    <input onChange={select} type="button" onClick={openMenu} className="list-items input"
                           name="World"
                           value='World of Tanks'/>
                </label>
                <label className={optionStyle}>
                    <input  onChange={() => select()} type="button" className={optionStyle} onClick={openMenu} name="World"
                           value='World of Warplanes'/>
                </label>
                <label className={optionStyle}>
                    <input onChange={() => select()} type="button" onClick={openMenu} className={optionStyle} name="World"
                           value='World of Warships'/>
                </label>
            </div>


        </div>
    );
};

export default Burger;