import { useState, useRef } from "react";

export const useImageUploader = (initialImage = null, onImageChange = () => {}) => {
    const [image, setImage] = useState(initialImage);
    const fileInputRef = useRef(null);

    const handleImageFile = (file) => {
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64data = reader.result;

                setImage(base64data);
                onImageChange(base64data);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        handleImageFile(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleImageFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return {
        img_b64: image,
        fileInputRef,
        handleFileChange,
        handleDrop,
        handleDragOver,
    };
};