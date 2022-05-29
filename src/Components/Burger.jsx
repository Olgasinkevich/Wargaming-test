import React, {useCallback, useState, useMemo} from 'react';


const Burger = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openMenu = useCallback((x) => {
            console.log(x);
            setIsOpen(!isOpen)
        }, [isOpen, setIsOpen]
    )
    const optionStyle = useMemo(() => isOpen ? "list-items input" : "list-items input closed", [isOpen]);
    return (
        <div className="hamburger-wrapper">

            <button onClick={openMenu} className={!isOpen ? "hamburger" : "hamburger closed"}>
                <span className="hamburger-line"></span>
            </button>

            <div className="hamburger-list frame" defaultValue={'Tanks'}>
                <label className={optionStyle}>
                    <input type="radio" onClick={openMenu} className="list-items input" name="World"
                           value="Tanks" readOnly={true}/>World Of
                    Tanks
                </label>
                <label className={optionStyle}>
                    <input type="radio" className={optionStyle} onClick={openMenu}  name="World"
                           defaultValue="Warplanes"/>World Of Warplanes
                </label>
                <label className={optionStyle}>
                    <input type="radio" onClick={openMenu} className={optionStyle} name="World"
                           defaultValue="Warships"/>World Of Warships
                </label>
            </div>


        </div>
    );
};

export default Burger;