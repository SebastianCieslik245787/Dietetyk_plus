import "../style/Creator.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import CreatorSelect from "../assets/elements/creator/meals/CreatorSelect.jsx";
import {useEffect, useRef, useState} from "react";
import CreatorSearchBar from "../assets/elements/creator/meals/CreatorSearchBar.jsx";
import CreatorAddItem from "../assets/elements/creator/meals/CreatorAddItem.jsx";
import AddMealWindow from "../assets/elements/creator/meals/AddMealWindow.jsx";

function Creator() {
    const [activeCreator, setActiveCreator] = useState(0);
    const [openAddItemWindow, setOpenAddItemWindow] = useState(false);

    const handleCreatorTypeClick = (index) => {
        setActiveCreator(index);
    }

    const creatorContainer = useRef(null);

    useEffect(() => {
        if (openAddItemWindow) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }

        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [openAddItemWindow]);

    return (
        <>
            <NavigationBar/>
            <div className="creator-container" ref={creatorContainer}>
                <div className="creator-menu">
                    <CreatorSelect
                        options={[
                            'Kreator posiłkow',
                            'Kreator diet'
                        ]}
                        setActive={handleCreatorTypeClick}
                        active={activeCreator}
                    />
                    <CreatorSearchBar
                        placeHolder={activeCreator === 0 ? 'Wyszukaj danie...' : 'Wyszukaj diete...'}
                    />
                </div>
                <div className="creator-menu-items">
                    <CreatorAddItem
                        placeHolder={activeCreator === 0 ? 'Dodaj posiłek' : 'Dodaj diete'}
                        onClick={() => setOpenAddItemWindow(true)}
                    />
                </div>
            </div>
            {(openAddItemWindow && activeCreator === 0) ?
                <AddMealWindow/> : ''
            }
        </>
    );
}

export default Creator;