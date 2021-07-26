import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    moduleFileExtensions: [
        "js",
        "jsx",
        "ts",
        "tsx",
        "json",
        "vue"
    ],
    transform: {
        ".*\\.([tj]s)$": "babel-jest",
        ".*\\.(vue)$": "vue-jest"
    }
};
export default config;
