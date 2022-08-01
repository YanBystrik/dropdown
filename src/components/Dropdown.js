import React, { useState } from 'react';
import iconClose from '../images/IconClose.svg';
import icon from '../images/Icon.svg'; 
import checkbox from '../images/Checkbox.svg';
import './Dropdown.scss';
import DropdownItem from './DropdownItem';

function Dropdown ({ title, items = [], multiSelect = false }) {
    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const toggle = () => setOpen(!open);

    function handleOnClick(item) {
        if (!select.some(current => current.id === item.id)) {
            if (!multiSelect) {
                setSelect([item]);
            } else if (multiSelect) {
                setSelect([ ...select, item]);
            }
        } else {
            let selectRemove = select;
            selectRemove = selectRemove.filter( current => current.id !== item.id);
            setSelect([ ...selectRemove]);
        }
    }

    function isItemSelect(item) {
       if (select.find(current => current.id === item.id)) {
        return true;
       }
       return false;
    }

    const filteredLang = items.filter(lang => {
        return lang.value.toString().toLowerCase().includes(searchValue.toLowerCase())
    })

    return(
    <div>
        <h1 className='dd-title' >Язык</h1>
        <div className='dd-wrapper'>
            <div 
                tabIndex={0}
                className='dd-header'
                role='button'>
                <div className='dd-header__title'>
                    <div className='dd-header__title-text'>{select.length === 0 && !open ? title : select.map(lang => (
                        <div className='dd-header__select-lang'>
                            <p className='dd-header__select-lang-item' key={lang.id}>{lang.value}</p>
                            <button className='dd-header__select-lang-del' onClick={() => handleOnClick(lang)}></button>
                        </div>
                    ))}
                    </div>
                </div>
                <div className='dd-header__action'>
                    <p className=''>{ open ? <img className='dd-header__close-icon' src={iconClose} alt='Close Icon' onClick={() => toggle(!open) }></img> 
                                           : <img className='dd-header__icon' src={icon} alt='Icon' onClick={() => toggle(!open)}></img> }
                    </p>
                </div>
            </div>
            <DropdownItem 
                open={open}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                filteredLang={filteredLang}
                checkbox={checkbox}
                isItemSelect={isItemSelect}
                handleOnClick={handleOnClick}
            />
        </div>
    </div>
    )
}



export default Dropdown;