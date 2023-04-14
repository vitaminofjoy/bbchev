import Text from "../../../../../../Elementes/Text/Text";

const CurrencySelectOption = ({onChangeCurrency, currency, value, text, symbol}) => {
    const isChecked = currency === value;

    return (
        <>
            <button value={value} onClick={onChangeCurrency} className={"modal-select__option" +
                        (isChecked ? ' modal-select__option--checked' : '')}>

                    <p className="button-text button-text--select"><span className="symbol-select">{symbol}</span><Text content={text} /></p>

                    {
                        isChecked && <>
                            <svg className="modal-select__icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.45766 17.2188C5.88994 17.2191 5.34547 16.9934 4.94438 16.5916L0.369217 12.0182C-0.123072 11.5257 -0.123072 10.7275 0.369217 10.235C0.861665 9.74274 1.65992 9.74274 2.15237 10.235L6.45766 14.5403L17.8476 3.15035C18.3401 2.65806 19.1383 2.65806 19.6308 3.15035C20.1231 3.64279 20.1231 4.44105 19.6308 4.9335L7.97094 16.5916C7.56984 16.9934 7.02538 17.2191 6.45766 17.2188Z" fill="#65A4FE"/>
                            </svg>
                        </>
                    }
            </button>
        </>
        
    );
}

export default CurrencySelectOption;