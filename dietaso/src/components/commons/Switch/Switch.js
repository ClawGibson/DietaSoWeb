import React from 'react';
import './Switch.scss';
import cx from 'classnames';
const Switch = ({ rounded = false, isToggle, onToggle, checked }) => {
    const sliderCX = cx('slider', {
        rounded: rounded,
    });
    return (
        <label className='switch'>
            <input
                type='checkbox'
                checked={checked ?? isToggle}
                onChange={onToggle}
            />
            <span className={sliderCX} />
        </label>
    );
};
export default Switch;
