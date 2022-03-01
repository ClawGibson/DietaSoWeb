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
