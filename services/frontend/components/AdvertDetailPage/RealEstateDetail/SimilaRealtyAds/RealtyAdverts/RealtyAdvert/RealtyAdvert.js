import Link from "next/link";
import { useCurrency } from "../../../../../../locales/hooks/useCurrency";
import LikeButtonContainer from "../../../../../HomePage/LikeButton/LikeButtonContainer";
import Image from "next/image"


const RealtyAdvert = ({advertId, category, title, cost, currency, address, img, date, uploads}) => {
    const cur = useCurrency()
    return (
        <>
            <div className="mobile-realty-advert">
                <div className="mobile-realty-advert__slider">
                    <Link href={`/advert/${category}/${advertId}`} className="mobile-realty-advert__line">

                        {
                            !!(uploads?.length) ? <>
                                {
                                    uploads?.map((img, index) => <img width={100} height={100} alt={''} src={img} key={index} className="mobile-realty-advert__item" />)

                                }
                            </> : <>
                                <div className="mobile-realty-advert__item" />
                                <div className="mobile-realty-advert__item" />
                                <div className="mobile-realty-advert__item" />
                            </>
                        }
                        

                    </Link>
                </div>

                <div className="mobile-realty-advert__desc">
                    <p className="mobile-realty-advert__title">
                        {title} <span className="title square">60,5m²</span>
                    </p>

                    <p className="advert-cost mobile-realty-advert__cost">
                        <span style={{fontWeight: 600}}>{cur.currency}</span>{cur.countCurrencyPrice(cost, currency)}
                    </p>

                    <div className="mobile-realty-advert__info">
                        <p className="info-text">{address}</p>
                        <p className="info-text">{date}</p>
                    </div>

                    <div className="mobile-realty-advert__like">
                        <LikeButtonContainer {...{id: advertId, category}} className={'mobile-realty-advert__btn'} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RealtyAdvert;