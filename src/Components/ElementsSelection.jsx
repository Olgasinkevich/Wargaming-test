import React, {useMemo, useState} from 'react';
import SearchForm from "./SearchForm";

import Elements from "./Elements";

import Modal from "./Modal/Modal";

import Element from "./Element";
import GroupModal from "./GroupModal";
import Sort from "./Sort";


const ElementsSelection = () => {


    return (
        <div className={'elements-wrapper'}>
            <GroupModal/>


        </div>
    );
};

export default ElementsSelection;