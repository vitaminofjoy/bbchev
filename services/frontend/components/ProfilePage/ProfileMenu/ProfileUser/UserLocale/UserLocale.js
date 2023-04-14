import { useSelector } from "react-redux";
import UserCurrencyButtonContainer from "./UserCurrencyButton/UserCurrencyButtonContainer";
import UserCurrencySelect from "./UserCurrencyButton/UserCurrencySelect/UserCurrencySelect";
import UserLanguageButtonContainer from "./UserLanguageButton/UserLanguageButtonContainer";
import UserLanguageSelect from "./UserLanguageButton/UserLanguageSelect/UserLanguageSelect";

const UserLocale = () => {
    const {isLanguageOpen, isCurrencyOpen} = useSelector(state => state.profile.locale)
    

    return (
        <>

        </>
    );
}

export default UserLocale;