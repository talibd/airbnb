"use client";

interface MenuItemProp {
    onclick: () => void;
    label: string;
}

const MenuItem: React.FC<MenuItemProp> = ({onclick,label}) => {
    return ( 
    <div onClick={onclick} className="
    px-6 
    py-3 
    hover:bg-neutral-100
    transition
    font-medium
    text-zinc-500">
        {label}
    </div> 
    );
}
 
export default MenuItem;