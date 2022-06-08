import React, {useCallback, useState, useMemo} from 'react';

const Burger = () => {

    const [selectedValue, setSelectedValue] = useState('World of Tanks');

    const [isOpen, setIsOpen] = useState(false);

    const onChange = useCallback((event)=> {
                setSelectedValue(event.target.value)
    }, [])
        const openMenu = useCallback(() => {

            setIsOpen(!isOpen)
        }, [isOpen, setIsOpen]);

        const optionStyle = useMemo(() => {
            return isOpen ? "list-items input" : "list-items input closed";

        }, [isOpen]);

        return (
            <div className="hamburger-wrapper">

                <button onClick={openMenu} className={!isOpen ? "hamburger" : "hamburger closed"}>
                    <span className="hamburger-line"></span>
                </button>

                <div className="hamburger-list frame" defaultValue={'Tanks'}>
                    <input className={isOpen ? "list-items input closed" : "list-items border-none"} type="button"
                           value={selectedValue}></input>
                    <label className={optionStyle}>
                        <input onChange={onChange} type="radio" onClick={openMenu}
                               className="list-items input"
                               name="World"
                               value='World of Tanks'/>World of Tanks
                    </label>
                    <label className={optionStyle}>
                        <input onChange={onChange} type="radio" className={optionStyle} onClick={openMenu}
                               name="World"
                               value='World of Warplanes'/>World of Warplanes
                    </label>
                    <label className={optionStyle}>
                        <input onChange={onChange} type="radio" onClick={openMenu} className={optionStyle}
                               name="World"
                               value='World of Warships'/>World of Warships
                    </label>
                </div>


            </div>
        );
    }


export default Burger;