function parseDateSince(dateString, unit) {
    const date = new Date(dateString);
    const now = new Date();
    const timeDifference = now - date;

    switch (unit) {
        case 'seconds':
            return Math.floor(timeDifference / 1000);
        case 'minutes':
            return Math.floor(timeDifference / (1000 * 60));
        case 'hours':
            return Math.floor(timeDifference / (1000 * 60 * 60));
        case 'days':
            return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        case 'years':
            return Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
        default:
            throw new Error('Invalid unit');
    }
}

export function parseDateToDaysSince(dateString) {
    return parseDateSince(dateString, 'days');
}

export function parseDateToYearSince(dateString) {
    return parseDateSince(dateString, 'years');
}