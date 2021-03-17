import { DefineComponent, Plugin } from 'vue';


declare const HyrnaticUiCore: Exclude<Plugin['install'], undefined>;
export default HyrnaticUiCore;

export const HyrnaticUiCoreSample: DefineComponent<{}, {}, any>;
