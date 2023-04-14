import Link from "next/link";
import Text from "../../../../../Elementes/Text/Text";

const UserMenuNav = ({isAuthed, onClose}) => {
    const isAuthedStyle = isAuthed ? 'user-menu__text user-menu__item user-menu__item--authed' : 'user-menu__text user-menu__item'

    return (
        <nav>
            <Link href={isAuthed ? "/favorites" : "/auth/registration"} onClick={onClose} className={isAuthedStyle}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.2269 1C17.0544 1.01799 15.9074 1.34088 14.9019 1.93606C13.8964 2.53123 13.0679 3.37762 12.5 4.38975C11.9321 3.37762 11.1036 2.53123 10.0981 1.93606C9.09256 1.34088 7.94564 1.01799 6.77314 1C4.90404 1.08011 3.14305 1.88673 1.87489 3.24364C0.606735 4.60055 -0.0655042 6.39744 0.00504078 8.24175C0.00504078 15.201 11.4129 23.2388 11.8982 23.5799L12.5 24L13.1018 23.5799C13.5871 23.2409 24.995 15.201 24.995 8.24175C25.0655 6.39744 24.3933 4.60055 23.1251 3.24364C21.8569 1.88673 20.096 1.08011 18.2269 1Z"/>
                </svg>

                <Text content="Favorites" />
            </Link>
        </nav>
    );
}

export default UserMenuNav;