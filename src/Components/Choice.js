import React, {useMemo} from 'react';

const Choice = (props) => {
/*
const elemChoice= useMemo((newArray)=>{
    newArray.map((item)=> <div onChange={()=>props.onSelect} className='choice frame'></div>)
    }, [props.newArray]);


/*
        .map((item) => <Element
            onSelect={selected} text={item} key={item} disabled ={disabled}

 */
    return (
       <>
           <h4>На данный момент выбрано:</h4>
            <>
                <div onChange={()=>props.onSelect} className='choice frame'></div>

            </>

        </>
    );
};

export default Choice;
const Element = (props) => {

    return (
        <label>
            <input onChange={()=>props.onSelect(props.text)} type={'checkbox'}/>
            {props.text}
        </label>
    );
};