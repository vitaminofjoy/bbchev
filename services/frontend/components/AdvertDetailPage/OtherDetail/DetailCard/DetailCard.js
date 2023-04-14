import Link from "next/link";
import { useRouter } from "next/router";
import { useCurrency } from "../../../../locales/hooks/useCurrency";
import Text from "../../../Elementes/Text/Text";

const DetailCard = ({cost, isMonth, phone, currency}) => {
    const cur = useCurrency()
    const {query: {category, advertId}, pathname} = useRouter()
    


    const isMounthed = (category === 'work') || (category === 'realty' && isMonth)


    return (
        <>
            <div className="detail-card">
                <div className="detail-card__wrapper">
                    <p className="detail-card__cost">
                        {cur.currency}{cur.countCurrencyPrice(cost, currency)}
                        {' '}
                        {
                            !!isMounthed && <span className="detail-tag-text"><Text content="per month" /></span>
                        }
                    </p>

                    <Link href={!!phone ? `https://api.whatsapp.com/send/?phone=${phone}` : {pathname, query: {category, advertId}}} className="contact-btn contact-btn--green">
                        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.6303 4.36C22.8093 1.55 19.0588 0.00125 15.0634 0C6.83023 0 0.12937 6.6675 0.125602 14.865C0.124346 17.485 0.812644 20.0425 2.12016 22.2975L0 30L7.91794 27.9325C10.0996 29.1175 12.5564 29.7413 15.0559 29.7425H15.0622C23.2941 29.7425 29.9962 23.0737 30 14.8763C30.0025 10.905 28.4501 7.16875 25.6303 4.36ZM15.0634 27.2313H15.0584C12.8302 27.2313 10.646 26.635 8.73938 25.5087L8.28595 25.2413L3.58719 26.4675L4.84195 21.9075L4.54679 21.44C3.30333 19.4725 2.64769 17.1987 2.64894 14.865C2.65145 8.0525 8.2219 2.51 15.0697 2.51C18.3856 2.51 21.503 3.7975 23.8468 6.1325C26.1905 8.46875 27.4804 11.5725 27.4792 14.8738C27.4754 21.6888 21.9062 27.2313 15.0634 27.2313ZM21.8736 17.9775C21.5005 17.7913 19.6655 16.8925 19.3226 16.7687C18.9809 16.645 18.7323 16.5825 18.4823 16.9538C18.2324 17.325 17.5189 18.1625 17.3004 18.4113C17.0831 18.6588 16.8646 18.69 16.4915 18.5037C16.1185 18.3175 14.9152 17.9263 13.4896 16.66C12.3806 15.675 11.6307 14.4587 11.4134 14.0863C11.1961 13.7137 11.3908 13.5138 11.5767 13.3288C11.745 13.1625 11.9498 12.895 12.1369 12.6775C12.3253 12.4625 12.3869 12.3075 12.5125 12.0588C12.6368 11.8113 12.5753 11.5938 12.4811 11.4075C12.3869 11.2225 11.6408 9.39375 11.3305 8.65C11.0278 7.925 10.7201 8.02375 10.4903 8.0125C10.273 8.00125 10.0243 8 9.77433 8C9.52564 8 9.1212 8.0925 8.77957 8.465C8.43793 8.8375 7.47331 9.73625 7.47331 11.5638C7.47331 13.3925 8.81097 15.1587 8.99686 15.4062C9.18275 15.6537 11.6282 19.4062 15.3724 21.015C16.2629 21.3975 16.9588 21.6262 17.5001 21.7975C18.3944 22.08 19.2083 22.04 19.8514 21.945C20.5686 21.8387 22.0595 21.0462 22.3709 20.1787C22.6824 19.3112 22.6824 18.5662 22.5882 18.4125C22.4953 18.2562 22.2466 18.1637 21.8736 17.9775Z" fill="white"/>
                        </svg>

                        <Text content="Write to WhatsApp" />
                    </Link>


                </div>
            </div>
        </>
    );
}

export default DetailCard;