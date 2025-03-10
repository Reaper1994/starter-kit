const configFileName = import.meta.env.VITE_APP_CONFIG || 'configDefault';

// Dynamically import the correct config file
const CONFIG = await import(`./${configFileName}`).then(module => module.APP_CONFIG);

export default CONFIG;