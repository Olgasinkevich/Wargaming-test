import React, {useCallback, useState} from 'react';


const Burger = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openMenu = useCallback(() => {
        setIsOpen(!isOpen)
        }, []
    )
    return (
        <div className="hamburger-wrapper">

            <button onClick={openMenu} className={!isOpen ? "hamburger" : "hamburger closed"}>
              <span className="hamburger-line"></span>
            </button>

            <div className="hamburger-list frame">

                <button onClick={openMenu} className="list-items input" name="World" value="Tanks" selected>World Of Tanks</button>

                <button onClick={openMenu} className={isOpen ? "list-items input" : "list-items input closed"} name="World"
                       value="Warplanes">World Of Warplanes
                </button>
                <button onClick={openMenu} className={isOpen ? "list-items input" : "list-items input closed"} name="World"
                       value="Warships">World Of Warships</button>

                <input type="hidden"/>
            </div>


        </div>
    );
};

export default Burger;