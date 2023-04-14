import Text from "../../../../../Elementes/Text/Text";
import useMobileException from "../UseMobileException";

const MobileFilterButton = ({switchFilterOpen, closeSearch, isSearchOpen}) => {
    const ExceptionStyle = useMobileException()

    return (
        <>
            {
                isSearchOpen ? <>
                    <button className="cancel-btn" onClick={closeSearch}>
                        <Text content="Cancel" />
                    </button>
                </> : <>
                </>
            }
            
        </>
    );
}

export default MobileFilterButton;