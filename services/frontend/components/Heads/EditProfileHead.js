import Head from "next/head";
import { useLanguage } from "../../locales/hooks/useLanguage";

const EditProfileHead = () => {
    const {t} = useLanguage()
    const title = `Bbchev - ${t('Edit profile')}`
    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bbchev.com" />
                <meta property="og:image" content="https://bbchev.com/img/bbchev.png" />
            </Head>
        </>
    );
}

export default EditProfileHead;