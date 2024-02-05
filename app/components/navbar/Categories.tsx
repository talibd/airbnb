'use client';

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Container from "../Container";
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
{
    label: 'beach',
    icon: TbBeach,
    description: 'This property is close to the beach'
},
{
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This property is close to the Windmills'
},
{
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'Modern Villa'
},
{
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is close to Countryside'
},
{
    label: 'Pools',
    icon: TbPool,
    description: 'This property is close to Pools'
},
{
    label: 'Island',
    icon: GiIsland,
    description: 'This property is close to Island'
},
{
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is close to Lake'
},
{
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property is close to skiing'
},
{
    label: 'castle',
    icon: GiCastle,
    description: 'This property is close to castle'
},
{
    label: 'Comping',
    icon: GiForestCamp,
    description: 'This property is close to comp'
},
{
    label: 'Artic',
    icon: BsSnow,
    description: 'This property is close to artic'
},
{
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is close to desert'
},
{
    label: 'cave',
    icon: GiCaveEntrance,
    description: 'This property is close to artic'
},
{
    label: 'Barns',
    icon: GiBarn,
    description: 'This property is close to Barns'
},
{
    label: 'Lux',
    icon: IoDiamond,
    description: 'This property is  to luxury'
},
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/';

    if ( !isMainPage ) {
        return null;
    }
    return ( 
       <Container>
        <div className="
        pt-4
        flex
        flex-row
        items-center
        justify-between
        overflow-auto
        w-full
        ">
            {categories.map((item) => (
                <CategoryBox 
                key={item.label}
                label={item.label}
                selected={category === item.label}
                icon={item.icon}
                />
            ))}
        </div>
       </Container>
     );
}
 
export default Categories;