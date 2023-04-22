import './style.css';

export const InputText = ({searchValue, handleChange, placeholder}) => {
    return (
        <input
            className='text-input'
            type="search"
            placeholder={placeholder}
            value={searchValue}
            onChange={handleChange}
        />
    )
}