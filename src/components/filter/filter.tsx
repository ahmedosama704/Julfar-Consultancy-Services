import React from 'react';
import Styles from './filter.module.scss'

interface PropsTypes {
    selectedGender: string;
    setSelectedGender: any;
    setQuantity: any;
}
export default function Filter(props: PropsTypes) {
    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setSelectedGender(event.target.value);
        props.setQuantity(3);
    };
    return (
        <div className={Styles.filter}>
            <label>
                <input
                    type="radio"
                    value="male"
                    checked={props.selectedGender === 'male'}
                    onChange={handleGenderChange}
                />
                Male
            </label>
            <label>
                <input
                    type="radio"
                    value="female"
                    checked={props.selectedGender === 'female'}
                    onChange={handleGenderChange}
                />
                Female
            </label>
            <label>
                <input
                    type="radio"
                    value="both"
                    checked={props.selectedGender === 'both'}
                    onChange={handleGenderChange}
                />
                Both
            </label>
        </div>
    )
}
