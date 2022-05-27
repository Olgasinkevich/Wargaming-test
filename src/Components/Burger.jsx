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

            <div className="hamburger-list frame">

                <input onClick={openMenu} className="list-items input" name="World" value="Tanks" selected>World Of
                    Tanks</input>

                <input onClick={openMenu} className={optionStyle} name="World"
                       value="Warplanes">World Of Warplanes
                </input>
                <input onClick={openMenu} className={optionStyle} name="World"
                       value="Warships">World Of Warships</input>

            </div>


        </div>
    );
};

export default Burger;