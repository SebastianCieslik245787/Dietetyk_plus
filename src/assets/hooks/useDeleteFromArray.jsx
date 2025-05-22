import { useState } from "react";

export function useDeleteFromArray(initialArray = []) {
    const [array, setArray] = useState(initialArray);

    const removeAtIndex = (indexToRemove) => {
        setArray(prevArray => prevArray.filter((_, index) => index !== indexToRemove));
    };

    return [array, setArray, removeAtIndex];
}