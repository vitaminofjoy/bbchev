import LoginPage from "../../components/LoginPage/LoginPage";
import Header from "../../components/Header/Header";
import { useLanguage } from "../../locales/hooks/useLanguage";
import Head from "next/head";


const Login = () => {
    const {t} = useLanguage()
    const title = `Bbchev - ${t('Login')}`


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
            <LoginPage />
        </>
    );
}

export default Login;