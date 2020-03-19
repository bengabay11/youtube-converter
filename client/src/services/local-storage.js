import config from "../config";

export const loadStateFromLocalStorage = () => {
        const serializedState = localStorage.getItem(config.stateKeyName);
        if (serializedState) {
            try {
                return JSON.parse(serializedState);
            }
            catch {
                // undefined expected
            }
        }

};

export const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(config.stateKeyName, serializedState);
    }
    catch {} {
        // ignore errors
    }
};