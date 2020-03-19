import config from "../config";

export const loadStateFromLocalStorage = () => {
        const serializedState = localStorage.getItem(config.stateLocalStorageKey);
        if (serializedState) {
            try {
                return JSON.parse(serializedState);
            }
            catch {}
        }

};

export const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(config.stateLocalStorageKey, serializedState);
    }
    catch {}
};