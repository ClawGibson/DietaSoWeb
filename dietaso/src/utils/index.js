import dayjs from 'dayjs';

export const waitFor = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

export const stringArrayToNumberArray = (array) => {
    try {
        if (Array.isArray(array)) {
            return array.map((item) => Number(item));
        }
    } catch (error) {
        console.groupCollapsed('[stringArrayToNumberArray]');
        console.error(error);
        console.groupEnd();
        return [];
    }
};

export const returnLabelsByChart = (initialLabels, count) => {
    try {
        const auxLabels = [];
        if (Array.isArray(initialLabels)) {
            for (let i = 0; i < count; i++) {
                auxLabels.push(...initialLabels);
            }
        }
        return auxLabels;
    } catch (error) {
        console.groupCollapsed('[returnLabelsByChart]');
        console.error(error);
        console.groupEnd();
        return [''];
    }
};

export const returnDateLabelByChat = (initialLabels, count, data) => {
    try {
        const auxLabels = [];

        if (Array.isArray(initialLabels)) {
            for (let i = 0; i < count; i++) {
                auxLabels.push(dayjs(data[i]).format('DD/MM/YYYY'));
            }
        }

        return auxLabels;
    } catch (error) {
        console.groupCollapsed('[returnDateLabelByChat]');
        console.error(error);
        console.groupEnd();
        return [''];
    }
};

export const isEmptyString = (elem) => {
    return elem === '';
};

export const isInvalidElem = (elem) => {
    return elem === null || elem === undefined;
};

export const isEmptyArray = (arr) => {
    if (!Array.isArray(arr) || isInvalidElem(arr)) return true;

    return arr.length === 0;
};
