export function sendPasswordRecoveryEmail(email) {
    return fetch(
        "/api/checkRecoveryEmail",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(email),
        }
    )
}

export function sendVerificationCode(code, email) {
    return fetch(
        "/api/verify",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"token":code, "email":email}),
        }
    )
}

export function sendPasswordNewPassword(token, password) {
    return fetch(
        "/api/resetPassword",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
            },
            body: JSON.stringify(password),
        }
    )
}