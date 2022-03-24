export const waitFor = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export function capitilizeWord(word) {
    if (word) {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }
    return '';
}

export const returnArrayToString = (array) => {
    try {
        if (Array.isArray(array)) {
            return array.join(', ');
        }
    } catch (error) {
        console.groupCollapsed('[returnArrayToString]');
        console.error(error);
        console.groupEnd();
        return '';
    }
};
