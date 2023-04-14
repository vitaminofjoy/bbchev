import Link from "next/link";
import Text from "../../Elementes/Text/Text";
import DetailBannerContainer from "../OtherDetail/DetailBanner/DetailBannerContainer";
import DetailCardContainer from "../OtherDetail/DetailCard/DetailCardContainer";
import DetailDataContainer from "../OtherDetail/DetailData/DetailDataContainer";
import DetailDateContainer from "../OtherDetail/DetailDate/DetailDateContainer";
import DetailMapsContainer from "../OtherDetail/DetailMaps/DetailMapsContainer";
import DetailNav from "../OtherDetail/DetailNav/DetailNav";
import DetailParameterContainer from "../OtherDetail/DetailParameter/DetailParameterContainer";
import DetailProfileContainer from "../OtherDetail/DetailProfile/DetailProfileContainer";
import SimilarAds from "../OtherDetail/SimilarAds/SimilarAds";
import RealtyParameterContainer from "./RealtyParameter/RealtyParameterContainer";
import SimilaRealtyAds from "./SimilaRealtyAds/SimilaRealtyAds";

const RealEstateDetail = ({serverAdvert}) => {
    return (
        <>
            <DetailNav {...{serverAdvert}} />
                
            <div className="container container--detail">
                <DetailBannerContainer {...{serverAdvert}} />

                <DetailCardContainer {...{serverAdvert}} />
            </div>

            <div className="container container-brad">
                <div className="detail-wrapper">
                    <DetailDataContainer {...{serverAdvert}} />

                    <DetailMapsContainer />

                    <RealtyParameterContainer {...{serverAdvert}} />

                    <div className="detail-wrapper__container detail-wrapper__container--date">
                        <DetailDateContainer {...{serverAdvert}} />
                    </div>

                    <DetailProfileContainer />

                    <div className="detail-wrapper__container">
                        <DetailDateContainer className={'exception'} {...{serverAdvert}} />

                        <Link href="/support" className="detail-tag-text detail-tag-text--red">
                            <Text content="Complain about the ad" />
                        </Link>
                    </div>
                </div>
            </div>

            <SimilaRealtyAds />

        </>
    );
}

export default RealEstateDetail;