export const onChangeInput = (setData) => {
    return (e) => {
        const {id, value} = e.target;
        setData(prev => ({
            ...prev,
            [id]: value,
        }));
    };
}