export default class Module {
    getAutoLoaderConfig() {
        return {
            'Flow/Loader/ClassLoader': {
                
            },
            'Flow/Loader/ModuleAutoLoader': {
                
            }
        };
    }

    getConfig() {
        return {};
    }

    init() {
        console.log('init');
        debugger;
    }

    onBootstrap() {
        console.log('onBootstrap');
        debugger;
    }
}