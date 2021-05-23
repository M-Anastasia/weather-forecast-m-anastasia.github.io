import React, {useEffect, useState} from 'react';
import s from './select.module.css';

export const Select = props => {

    const [pikedCity, setPikedCity] = useState('');

    useEffect(() => {
        setPikedCity(props.placeholder);
    }, []);

    const Options = () => {
        const options = props.options.map((option) =>
            <li onClick={() => {
                console.log(option + ' was clicked');
                setPikedCity(option);
                props.setIsCityPiked(true);
            }}>{option}</li>
        );
        return <ul className={props.styles.shift_options}>{options}</ul>;
    }

    return (
        <details className={props.styles.shift}>
            <summary className={props.isCityPiked ? s.piked : s.unpicked}>
                {pikedCity}
            </summary>
            <Options />
        </details>
    )
}