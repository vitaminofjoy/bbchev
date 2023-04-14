import Link from "next/link";
import Text from "../../Elementes/Text/Text";
import ProfileUserContainer from "./ProfileUser/ProfileUserContainer";

const ProfileMenu = ({user}) => {
    return (
        <>
            <aside className="profile__menu">
                <ProfileUserContainer {...{user}} />
                
                <Link href="/profile/settings" className="profile__link">
                    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.50536 22.5C3.53958 24.2945 5.83313 24.911 7.62809 23.8771C7.62932 23.8764 7.6305 23.8757 7.63173 23.875L8.1881 23.5537C9.23838 24.4521 10.4456 25.1487 11.749 25.6087V26.25C11.749 28.3211 13.4284 30 15.5 30C17.5716 30 19.251 28.3211 19.251 26.25V25.6087C20.5546 25.148 21.7619 24.4505 22.8119 23.5512L23.3708 23.8737C25.1662 24.9093 27.4614 24.2937 28.4972 22.4987C29.533 20.7038 28.9172 18.4092 27.1218 17.3737L26.5666 17.0537C26.8165 15.6943 26.8165 14.3007 26.5666 12.9412L27.1218 12.6212C28.9172 11.5857 29.533 9.29115 28.4972 7.49619C27.4614 5.70129 25.1662 5.08564 23.3708 6.12117L22.8144 6.44244C21.7631 5.5452 20.555 4.8498 19.251 4.39125V3.75C19.251 1.67895 17.5716 0 15.5 0C13.4284 0 11.749 1.67895 11.749 3.75V4.39125C10.4454 4.85197 9.23814 5.54947 8.1881 6.44877L7.62921 6.12504C5.83377 5.08945 3.53864 5.7051 2.50284 7.5C1.46704 9.2949 2.08279 11.5895 3.87822 12.625L4.43337 12.945C4.18346 14.3044 4.18346 15.698 4.43337 17.0575L3.87822 17.3775C2.08777 18.4158 1.47402 20.7059 2.50536 22.5ZM15.5 10C18.2621 10 20.5013 12.2386 20.5013 15C20.5013 17.7614 18.2621 20 15.5 20C12.7379 20 10.4987 17.7614 10.4987 15C10.4987 12.2386 12.7379 10 15.5 10Z" fill="#414042" fillOpacity="0.4"/>
                    </svg>

                    <Text content="Settings" />
                </Link>


            </aside>

            <div className="mobile-head">
                <h4 className="title title--profile"><Text content="My Ads" /></h4>

                <Link href="/profile/archive" className="mobile-archive-link">
                    <Text content="Archive" />
                </Link>
            </div>
        </>
    );
}

export default ProfileMenu;