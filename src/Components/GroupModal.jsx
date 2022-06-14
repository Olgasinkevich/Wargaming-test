import React, {useCallback, useState} from 'react';
import Modal from "./Modal/Modal";
import Choice from "./Choice";

const GroupModal = () => {

    const [isModal, setIsModal] = useState(false);


    const modal = useCallback(() => {

        setIsModal(!isModal)
    }, [isModal, setIsModal]);


    const onModalPress = useCallback(() => {
        setIsModal(false);
    }, [setIsModal]);


    return (
        <>
            <h3 className={'title-three'}>Выбор элементов</h3>
            <Choice/>
            <button onClick={modal} className={'search-button frame'}>Изменить выбор</button>
            <Modal visible={isModal} onPress={onModalPress}>

            </Modal>

        </>
    );
};

export default GroupModal;