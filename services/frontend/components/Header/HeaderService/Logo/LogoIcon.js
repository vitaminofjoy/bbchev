import Link from "next/link";

const LogoIcon = () => {
    return (
        <>
            <Link href='/' className="logo-icon">BBC<span className="green">H</span>
                                            <span className="yellow">E</span>
                                            <span className="blue">V</span>
            </Link>
        </>
    );
}

export default LogoIcon;