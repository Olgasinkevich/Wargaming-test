import React, {useCallback, useState} from 'react';
import Modal from "./Modal/Modal";
import Choice from "./Choice";




const GroupModal = () => {

    console.log('!!!');
    const [isModal, setIsModal] = useState(false);
    const [newArray, setNewArray] = useState([]);

    const modal = useCallback(() =>{
        console.log('modal))');
        setIsModal(!isModal)}, [isModal, setIsModal]);



     const onModalPress= useCallback(()=> {
        setIsModal(false);
            }, [setIsModal]);

    return (
        <>
            <h3 className={'title-three'}>Выбор элементов</h3>
            <Choice/>
            <button onClick={modal} className={'search-button frame'}>Изменить выбор</button>
            <Modal visible= {isModal} onPress={onModalPress} newArray={newArray} setNewArray={setNewArray}>

            </Modal>

        </>
    );
};

export default GroupModal;