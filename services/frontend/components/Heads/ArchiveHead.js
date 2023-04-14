import Head from "next/head";
import { useLanguage } from "../../locales/hooks/useLanguage";

const ArchiveHead = () => {
    const {t} = useLanguage()
    const title = `Bbchev - ${t('Archive')}`
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

export default ArchiveHead;