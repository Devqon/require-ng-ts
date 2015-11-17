// Requirejs config interface
interface IGlobalConfig {
    angularWrapperId: string;
    libsPath: string;
    appMainFile: string;
}

// Require modules with named angular modules
interface IRequireAngularModule {
    name: string;
}