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
        return require(__dirname + '/config/module.config');
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