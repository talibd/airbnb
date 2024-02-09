'use client';

import { IconType } from "react-icons";

interface CategoryInputprops {
    icon: IconType;
    label:string;
    selected?: boolean;
    onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputprops> = ({
    icon: Icon,
    label,
    selected,
    onClick
}) => {
    return ( 
        <div 
        onClick={() => onClick(label)}
        className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-neutral-500
        transition
        cursor-pointer
        ${selected ? 'border-neutral-500' : 'border-neutral-200'}
        `}
        >
        <Icon size={30} className="text-neutral-500" />
        <div className="font-semibold text-sm text-neutral-500">{label}</div>
        </div>
     );
}
 
export default CategoryInput;