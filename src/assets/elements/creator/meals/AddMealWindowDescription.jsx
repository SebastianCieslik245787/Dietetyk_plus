import LoadImageIcon from "../../../../images/icons/add_image_icon.png"
import {useState} from "react";
import {useImageUploader} from "../../../hooks/useImageUploader.jsx";
import {onChangeInput} from "../../../hooks/onChangeInput.jsx";

const AddMealWindowDescription = ({data, setData, errors}) => {
    const [isChanged, setIsChanged] = useState(false);
    const {
        image,
        fileInputRef,
        handleFileChange,
        handleDrop,
        handleDragOver,
    } = useImageUploader(LoadImageIcon, (base64data) => {
        setData(prev => ({ ...prev, image: base64data }));
        setIsChanged(true);
    });

    const handleChange = onChangeInput(setData);

    return(
        <>
            <div className="add-meal-window-description">
                <div className="add-meal-window-name">
                    <input id={"name"} onChange={handleChange} value={data.name} className="add-meal-window-name-input" type="text" placeholder="Wpisz nazwę..." />
                    <div className={`add-meal-window-error ${errors.name !== '' ? 'visible' : ''}`}>
                        {errors.name}
                    </div>
                </div>
                <div
                    className={`add-meal-window-name-add-image ${isChanged ? 'changed' : ''}`}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() => fileInputRef.current.click()}
                >
                    <img src={`${image}`} className="preview"  alt=""/>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        onChange={handleFileChange}
                    />
                </div>
                <div className="add-meal-window-recipe">
                    <textarea value={data.recipe} id={"recipe"} onChange={handleChange} placeholder="Wpisz przepis..."/>
                    <div className={`add-meal-window-error ${errors.recipe !== '' ? 'visible' : ''} recipe-error`}>
                        {errors.recipe}
                    </div>
                </div>
            </div>
        </>
    );
}; export default AddMealWindowDescription;