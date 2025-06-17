import Error from "../assets/elements/error_page/Error.jsx";

function Error500() {
    return (
        <>
            <Error
                errorCode={"Error 500"}
                errorMessage="Coś poszło nie tak po naszej stronie. Spróbuj ponownie później."
            />
        </>
    )
}

export default Error500;