import LoadImageIcon from "../../../../images/icons/add_image_icon.png"
import {useRef, useState} from "react";

const AddMealWindowDescription = () => {
    const [image, setImage] = useState(LoadImageIcon);
    const [isChanged, setIsChanged] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setImage(URL.createObjectURL(file));
            setIsChanged(true);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            setImage(URL.createObjectURL(file));
            setIsChanged(true);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return(
        <>
            <div className="add-meal-window-description">
                <div className="add-meal-window-name">
                    <input className="add-meal-window-name-input" type="text" placeholder="Wpisz nazwę..." />
                </div>
                <div
                    className={`add-meal-window-name-add-image ${isChanged ? 'changed' : ''}`}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() => fileInputRef.current.click()}
                >
                    <img src={image} className="preview"  alt=""/>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        onChange={handleFileChange}
                    />
                </div>
                <div className="add-meal-window-recipe">
                    <textarea placeholder="Wpisz przepis..."/>
                </div>
            </div>
        </>
    );
}; export default AddMealWindowDescription;