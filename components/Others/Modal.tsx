// components/Modal.js
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 backdrop-blur-sm bg-black/30"></div>
            <div className="relative rounded-lg bg-[#1b7385] shadow-lg p-6 w-11/12 md:w-1/3 z-10">
                <button className="absolute top-6 right-6" onClick={onClose}>
                <Icon icon="mingcute:close-fill" className='text-gray w-6 h-6 hover:text-[#E95141] transition-all duration-300'/>
                </button>
                <div className='p-4'>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
