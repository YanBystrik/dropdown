import React from "react";
import './DropdownItem.scss';

function DropdownItem({ open, searchValue, setSearchValue, filteredLang, handleOnClick, isItemSelect, checkbox }) {
    return (
    <> 
        { open && (
            <div className='dd-list-container'>
                <input 
                    type='text' 
                    className='dd-search' 
                    placeholder='Поиск'
                    onChange={(event) => 
                    setSearchValue(event.target.value)
                    }
                    value={searchValue}
                />
                <ul className='dd-list'>
                    {filteredLang.map(item => (
                        <li className='dd-list__item' key={item.id}>
                            <button className='dd-list__button' type='button' onClick={() => handleOnClick(item)}>
                                <span className='dd-list__elem'><img className='flag' src={item.img} alt='flag'></img>{item.value}</span>
                                <div className='dd-list__item-not-choise'>{isItemSelect(item) && <img className='checkbox' src={checkbox} alt='checkbox'></img>}</div>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>    
        )}
    </>
    )
}

export default DropdownItem;