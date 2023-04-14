import Head from "next/head";
import AdvertDetailPage from "../../../components/AdvertDetailPage/AdvertDetailPage";
import { AdvertApi } from "../../../services/AdvertApi";

const AdvertId = ({serverAdvert}) => {
    const title = `bbchev - ${serverAdvert.title}`
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
            <AdvertDetailPage {...{serverAdvert}} />
        </>
    );
}

export async function getServerSideProps({req, res, locale, query: {advertId, category}}) {
    const serverAdvert = await AdvertApi.getAdvertDatails(advertId, category, locale)

    if(!serverAdvert) {
        return {
            redirect: {
              destination: '/',
              permanent: false,
            },
        }
    }

    return {
        props: {serverAdvert}
    }
}

export default AdvertId;