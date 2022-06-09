import React, {useCallback, useState} from 'react';
import Modal from "./Modal/Modal";




const GroupModal = () => {
    console.log('!!!');
    const [isModal, setIsModal] = useState(false);

    const modal = useCallback(() =>{
        console.log('modal))');
        setIsModal(!isModal)}, [isModal, setIsModal]);



     const onModalPress= useCallback(()=> {
        setIsModal(false);
            }, [setIsModal]);

    return (
        <>
            <h3 className={'title-three'}>Выбор элементов</h3>
            <h4>На данный момент выбрано:</h4>
            <>
                <div className='choice frame'></div>
                <div className='choice frame'></div>
                <div className='choice frame'></div>
            </>
            <button onClick={modal} className={'search-button frame'}>Изменить выбор</button>
            <Modal visible= {isModal} onPress={onModalPress}>

            </Modal>

        </>
    );
};

export default GroupModal;