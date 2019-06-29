export const organizeFormats = formatsInfo => {
    return formatsInfo.filter((formatInfo, index) => formatsInfo.indexOf(formatInfo) === index);
};