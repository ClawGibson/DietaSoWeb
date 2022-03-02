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
