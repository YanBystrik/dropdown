import React, { useState } from 'react';
import iconClose from './images/iconClose.png';
import checkbox from './images/Checkbox.png';

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
        <h1 className='dd-title'>Язык</h1>
        <div className='dd-wrapper'>
            <div 
                tabIndex={0}
                className='dd-header'
                role='button'
                onClick={() => toggle(!open)}>
                <div className='dd-header__title'>
                    <p className='dd-header__title--bold'>{ !open ? title : ''}</p>
                </div>
                <div className='dd-header__action'>
                    <p className=''>{ open ? <img className='dd-header__close-icon' src={iconClose} alt='Close Icon'></img> : ''}</p>
                </div>
            </div>
            { open && (
                <div className='dd-list-container'>
                    <input 
                        type='text' 
                        className='dd-search' 
                        placeholder='Поиск'
                        onChange={(event) => setSearchValue(event.target.value)}/>
                    <ul className='dd-list'>
                        {filteredLang.map(item => (
                            <li className='dd-list-item' key={item.id}>
                                <button type='button' onClick={() => handleOnClick(item)}>
                                    <span><img className='flag' src={item.img} alt='flag'></img>{item.value}</span>
                                    <div className='dd-list-item-not-choise'>{isItemSelect(item) && <img className='checkbox' src={checkbox} alt='checkbox'></img>}</div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>    
            )}
        </div>
    </div>
    )
}



export default Dropdown;