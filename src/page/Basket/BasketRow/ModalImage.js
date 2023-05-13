import React, {useState} from 'react';

const ModalImage = ({el}) => {
    const [modal,setModal] = useState(true)
    return (
        <div>
            <img
                onClick={() => setModal(false)}
                width={40} className='cursor-pointer' src={el.image} alt=""/>
            <div
                onClick={() => setModal(true)}
                hidden={modal}
                className='fixed left-0 top-0 right-0 bottom-0 bg-black/70 cursor-grab'/>
            <div
                hidden={modal}
                className='fixed left-[37%] top-[15.3%]'>
                <img width={400} src={el.image} alt="img"/>
            </div>
        </div>
    );
};

export default ModalImage;