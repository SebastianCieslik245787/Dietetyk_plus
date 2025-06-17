import Error from "../assets/elements/error_page/Error.jsx";

function Error403() {
    return (
        <>
            <Error
                errorCode={"Error 403"}
                errorMessage="Nie masz uprawnień do wykonania tej operacji."
            />
        </>
    )
}

export default Error403;