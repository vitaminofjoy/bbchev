import { useSelector } from "react-redux";
import FilterRouter from "./FilterRouter";
import HomeFilter from "./Filters/HomeFilter/HomeFilter";
import {filter, row, titleFilter} from "./filter.module.scss"
import Text from "../../../Elementes/Text/Text";
import Link from "next/link";

const Filter = ({closeFilter}) => {
    const {isFilterOpen} = useSelector(state => state.filter)
    return (
        <>
            {
                isFilterOpen && <>
                    <div className={filter}>
                        <h6 className={`title ${titleFilter}`}>
                            <svg onClick={closeFilter} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.916664 10.3229L4.94792 6.25002C5.04475 6.15238 5.15996 6.07489 5.2869 6.02201C5.41384 5.96912 5.54999 5.94189 5.6875 5.94189C5.82501 5.94189 5.96116 5.96912 6.0881 6.02201C6.21504 6.07489 6.33025 6.15238 6.42708 6.25002V6.25002C6.62109 6.44519 6.72999 6.7092 6.72999 6.98439C6.72999 7.25959 6.62109 7.5236 6.42708 7.71877L2.71875 11.4584L23.9583 11.4584C24.2346 11.4584 24.4996 11.5681 24.6949 11.7634C24.8903 11.9588 25 12.2238 25 12.5V12.5C25 12.7763 24.8903 13.0412 24.6949 13.2366C24.4996 13.4319 24.2346 13.5417 23.9583 13.5417L2.65625 13.5417L6.42708 17.3021C6.52472 17.3989 6.60221 17.5141 6.65509 17.6411C6.70798 17.768 6.7352 17.9042 6.7352 18.0417C6.7352 18.1792 6.70798 18.3153 6.65509 18.4423C6.60221 18.5692 6.52472 18.6844 6.42708 18.7813C6.33025 18.8789 6.21504 18.9564 6.0881 19.0093C5.96116 19.0622 5.82501 19.0894 5.6875 19.0894C5.54999 19.0894 5.41384 19.0622 5.2869 19.0093C5.15996 18.9564 5.04475 18.8789 4.94792 18.7813L0.916664 14.7396C0.331454 14.1537 0.00274785 13.3594 0.00274785 12.5313C0.00274785 11.7031 0.331454 10.9089 0.916664 10.3229V10.3229Z" fill="#414042"/>
                            </svg>
                            

                            <Text content={'Filter'} />
                        </h6>
                        <div className={row}>
                            <HomeFilter />
                            <FilterRouter />
                        </div>
                    </div>
                    
                </>
            }
        </>
    );
}

export default Filter;