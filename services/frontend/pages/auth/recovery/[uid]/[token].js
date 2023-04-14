import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../../../../components/Header/Header";
import PasswordRecoveryPage from "../../../../components/PasswordRecoveryPage/PasswordRecoveryPage";
import { useLanguage } from "../../../../locales/hooks/useLanguage";

const PasswordReset = () => {
    const {t} = useLanguage()

    const {query: {uid, token}, pathname, query, asPath, push, locale} = useRouter()

    useEffect(() => {
        push({
            pathname, query
        }, asPath, {locale: localStorage.getItem('i18nextLng') || 'en'})
    }, [])

    const title = `Bbchev - ${t('Reset password')}`
    
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
            <Header />
            <PasswordRecoveryPage />
        </>
    );
}

export default PasswordReset;