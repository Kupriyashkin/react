import React from "react";
import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

    const rootCLasses = [cl.myModal]

    if (visible) {
        rootCLasses.push(cl.active)
    }

    return (
        <div className={rootCLasses.join(' ')} onClick={()=> setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;