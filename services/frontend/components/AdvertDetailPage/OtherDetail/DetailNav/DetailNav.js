import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Text from "../../../Elementes/Text/Text";
import LikeButtonContainer from "../../../HomePage/LikeButton/LikeButtonContainer";

const DetailNav = ({serverAdvert}) => {
    const {query: {category}} = useRouter()
    const isSquare = category === 'realty'

    const storeAdvert = useSelector(state => state.advert)

    const advert = !!storeAdvert.advertId ? storeAdvert : serverAdvert

    const {title, advertId, square} = advert

    return (
        <>
            <div className="container container--detail-nav">
                <nav className="detail-nav">
                    <div className="title title--profile title--detail">
                        <h3 className="exception">{title}
                            {isSquare && <span className="title square">{square} <Text content="m²" /></span>}
                        </h3>

                        <LikeButtonContainer {...{id: advertId, category}} className={'detail-like'} />
                    </div>

                    <Link href="/" className="detail-back-link">
                        <svg viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.916664 5.32293L4.94792 1.25002C5.04475 1.15238 5.15996 1.07489 5.2869 1.02201C5.41384 0.969122 5.54999 0.941895 5.6875 0.941895C5.82501 0.941895 5.96116 0.969122 6.0881 1.02201C6.21504 1.07489 6.33025 1.15238 6.42708 1.25002V1.25002C6.62109 1.44519 6.72999 1.7092 6.72999 1.98439C6.72999 2.25959 6.62109 2.5236 6.42708 2.71877L2.71875 6.45835L23.9583 6.45835C24.2346 6.45835 24.4996 6.5681 24.6949 6.76345C24.8903 6.9588 25 7.22375 25 7.50002V7.50002C25 7.77629 24.8903 8.04124 24.6949 8.23659C24.4996 8.43194 24.2346 8.54169 23.9583 8.54169L2.65625 8.54169L6.42708 12.3021C6.52472 12.3989 6.60221 12.5141 6.65509 12.6411C6.70798 12.768 6.7352 12.9042 6.7352 13.0417C6.7352 13.1792 6.70798 13.3153 6.65509 13.4423C6.60221 13.5692 6.52472 13.6844 6.42708 13.7813C6.33025 13.8789 6.21504 13.9564 6.0881 14.0093C5.96116 14.0622 5.82501 14.0894 5.6875 14.0894C5.54999 14.0894 5.41384 14.0622 5.2869 14.0093C5.15996 13.9564 5.04475 13.8789 4.94792 13.7813L0.916664 9.7396C0.331454 9.15366 0.00274785 8.3594 0.00274785 7.53127C0.00274785 6.70314 0.331454 5.90887 0.916664 5.32293V5.32293Z" />
                        </svg>


                    </Link>

                    <Link href="/" className="profile-link">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1.25199C14.9997 1.58377 14.8661 1.90186 14.6284 2.13633L8.14972 8.53693C7.95362 8.73061 7.79806 8.96056 7.69193 9.21365C7.5858 9.46673 7.53118 9.73799 7.53118 10.0119C7.53118 10.2859 7.5858 10.5571 7.69193 10.8102C7.79806 11.0633 7.95362 11.2933 8.14972 11.4869L14.62 17.8792C14.8507 18.1152 14.9784 18.4313 14.9755 18.7595C14.9726 19.0876 14.8394 19.4014 14.6046 19.6335C14.3697 19.8655 14.052 19.9971 13.7199 20C13.3878 20.0028 13.0678 19.8767 12.8289 19.6487L6.35861 13.2615C5.48861 12.4003 5 11.2332 5 10.0165C5 8.7998 5.48861 7.63279 6.35861 6.77159L12.8373 0.366817C13.0145 0.191688 13.2402 0.0724106 13.486 0.0240773C13.7318 -0.024256 13.9866 0.000527255 14.2181 0.0952911C14.4497 0.190055 14.6475 0.35054 14.7867 0.55644C14.9259 0.762339 15.0001 1.0044 15 1.25199Z" fill="#7AB1FF"/>
                        </svg>

                        <Text content="Go back to the main page" />
                    </Link>
                </nav>
            </div>
        </>
    );
}

export default DetailNav;