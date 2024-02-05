'use client';

import useCountries from '@/app/hooks/useCountries';
import Select from 'react-select';

export type CategorySelectValue = {
    flag: string;
    label: string;
    latlng: number[];
    region: string;
    value: string;
}

interface CountrySelectProps {
    value?: CategorySelectValue;
    onChange: (value: CategorySelectValue) => void;
}

const CountrySelect:React.FC<CountrySelectProps> = ({
    value,
    onChange
}) => {
    const {getAll} = useCountries();
    return ( 
        <div>
            <Select 
            placeholder="Anywhere" 
            isClearable 
            options={getAll()}
            value={value}
            onChange={(value)=> onChange(value as CategorySelectValue)}
            formatOptionLabel={(option: any)=> (
                <div className=' flex flex-row items-center gap-3'>
                    {/* <div>{option.flag}</div> */}
                    <div>{option.label},
                    <span className='text-neutral-500 ml-1'>{option.region}</span>
                    </div>
               </div>
            )}
            classNames={{
                control: () => 'p-3 border-2',
                input: () => 'text-lg'
            }}
            theme={(them)=>({
                ...them,
                borderRadius: 6,
                colors: {
                    ...them.colors,
                primary: 'lightgray',
                primary25: '#ffe4e6'
                }

            })} />
        </div>
     );
}
 
export default CountrySelect;