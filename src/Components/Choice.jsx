import React, {useMemo} from 'react';
import ChoiceFrame from "./ChoiceFrame";

const Choice = ({newArray=[]}) => {

    const elemChoice = useMemo(() => {
        return newArray.map((item) => <ChoiceFrame text={item} key={item}/>)
    }, [newArray]);

    return (
        <>
            <h4>На данный момент выбрано:</h4>
            {elemChoice}

        </>
    );
};

export default Choice;

