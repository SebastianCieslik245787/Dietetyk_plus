import LoadImageIcon from "../../../../images/icons/add_image_icon.png"
import {useRef, useState} from "react";

const AddMealWindowDescription = ({data, setData, errors}) => {
    const [image, setImage] = useState(LoadImageIcon);
    const [isChanged, setIsChanged] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64data = reader.result;

                setImage(base64data);

                setData(prev => ({
                    ...prev,
                    ['image']: base64data
                }));

                setIsChanged(true);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64data = reader.result;

                setImage(base64data);

                setData(prev => ({
                    ...prev,
                    image: base64data
                }));

                setIsChanged(true);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData(prev => ({
            ...prev,
            [id]: value,
        }));
    };

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
                    <textarea value={data.recipe} id={"recipe"} onChange={handleChange} placeholder="Wpisz przepis..."/>
                    <div className={`add-meal-window-error ${errors.recipe !== '' ? 'visible' : ''} recipe-error`}>
                        {errors.recipe}
                    </div>
                </div>
            </div>
        </>
    );
}; export default AddMealWindowDescription;