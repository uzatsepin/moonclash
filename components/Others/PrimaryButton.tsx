import React from 'react';
import { Icon } from '@iconify/react';

interface PrimaryButtonProps {
    text: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    icon?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick, icon }) => {
    return (
        <div
            onClick={onClick}
            className="py-[9px] px-[30px] lg:py-[17px] lg:px-[63px] bg-[#E95141] shadow-button flex items-center justify-center font-semibold text-[16px] lg:text-4xl leading-[20px] lg:leading-[44px] uppercase text-gray rounded-full cursor-pointer hover:bg-[#A32F30] transition-all duration-300"
        >
            {icon ? <Icon icon="line-md:loading-loop" /> : text}
        </div>
    );
};

export default PrimaryButton;
