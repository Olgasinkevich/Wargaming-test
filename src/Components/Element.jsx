import React, {useCallback, useState} from 'react';
import '../styles/testStyle.css';


const Element = (props) => {
    const [checked, setChecked] = useState(false);

    const onChange = useCallback(() => {
        props.onSelect(props.text);
        setChecked(!checked);
    },[props, setChecked, checked]);

    return (
        <label>
            <input onChange={onChange} type={'checkbox'} disabled={!checked && props.disabled} checked={checked}/>
            {props.text}
        </label>
    );
};

export default Element;