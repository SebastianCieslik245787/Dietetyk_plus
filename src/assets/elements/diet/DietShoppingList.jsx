import React, { useState } from "react";
import DownloadIcon from "../../../images/icons/download_icon.png";
import { mealCategoryData } from "../../../data/SelectOptionsData.js";
import { generateShoppingListPDF } from "../../../scripts/generateShoppingListPDF.js"; // import funkcji PDF
import TransparentLogo from "../../../images/transparent_logo.png";

const today = new Date();
const dayOfWeek = today.getDay() === 0 ? 6 : today.getDay() - 1;

function getBase64FromUrl(url) {
    return fetch(url)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        }));
}


const DietShoppingList = ({ options, data, userName = "Pacjent", userSurname = "" }) => {
    const [activeIndex, setActiveIndex] = useState(dayOfWeek);

    const handleItemClick = (index) => setActiveIndex(index);

    const handleDownload = async () => {
        const logoBase64 = await getBase64FromUrl(TransparentLogo);
        generateShoppingListPDF(data, userName, userSurname, logoBase64);
    };


    return (
        <div className="diet-plan-content" id={"diet-plan-content"}>
            <div className="diet-plan-menu">
                <div className="diet-plan-menu-header">
                    Lista zakupów
                </div>
                <div className="diet-plan-menu-items">
                    {options.map((item, index) => (
                        <div
                            className={`diet-plan-menu-item ${activeIndex === index ? 'diet-plan-menu-item-text-active' : ''}`}
                            key={index}
                            onClick={() => handleItemClick(index)}
                        >
                            <div className="diet-plan-menu-item-active"
                                 style={{
                                     visibility: activeIndex === index ? 'visible' : 'hidden'
                                 }}
                            />
                            <div className="diet-plan-menu-item-text">
                                {item}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="diet-plan-menu-button" onClick={handleDownload}>
                    <img src={`${DownloadIcon}`} alt=""/>
                    <p className="diet-plan-menu-button-text">
                        Pobierz
                    </p>
                </div>
            </div>
            <div className="diet-plan-separator" id={"diet-plan-separator"}/>
            <div className="diet-shopping-list">
                <div className="diet-shopping-list-label">
                    <div className="diet-shopping-list-product-name">
                        Produkt
                    </div>
                    <div className="diet-shopping-list-product-count">
                        Ilość
                    </div>
                    <div className="diet-shopping-list-product-category">
                        Kategoria
                    </div>
                </div>
                <div className="diet-shopping-list-items">
                    {
                        data[activeIndex].map((item, index) => (
                            <div className="diet-shopping-list-item" key={index}>
                                <div className="diet-shopping-list-item-product-name">
                                    {item.name}
                                </div>
                                <div className="diet-shopping-list-item-product-count">
                                    {item.count} {item.unit}
                                </div>
                                <div className="diet-shopping-list-item-product-category">
                                    {mealCategoryData[item.categoryId]}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default DietShoppingList;