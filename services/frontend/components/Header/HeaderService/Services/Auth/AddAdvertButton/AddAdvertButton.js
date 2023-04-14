import Link from "next/link";
import Text from "../../../../../Elementes/Text/Text";

const AddAdvertButton = ({isAuthed}) => {
    return (
        <>
            <Link href={isAuthed ? '/add_advert' : '/auth/registration'} className="settings-link-text">

            </Link>
        </>
    );
}

export default AddAdvertButton;