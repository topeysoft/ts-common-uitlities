var responsiveData = {};
var resposiveComponents = {};
var responsiveConfig;
var initialized = false;
function isVisible(elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
}
;
function init(config) {
    var mergedConfig = mergeConfig(config);
    window.addEventListener('resize', (e) => {
        calculateSizes();
    });
    calculateSizes();
    initialized = true;
}
function calculateSizes() {
    responsiveData.xs = window.innerWidth > responsiveConfig.breakpoints.xs;
    responsiveData.sm = window.innerWidth >= responsiveConfig.breakpoints.sm;
    responsiveData.md = window.innerWidth >= responsiveConfig.breakpoints.md;
    responsiveData.lg = window.innerWidth >= responsiveConfig.breakpoints.lg;
    responsiveData.xl = window.innerWidth >= responsiveConfig.breakpoints.xl;
}
function mergeConfig(config) {
    responsiveConfig = new TsResponsiveConfig();
    return Object.assign(responsiveConfig, config);
}
function getData() {
    if (!initialized)
        init();
    return responsiveData;
}
export class TsResponsiveConfig {
    constructor() {
        this.breakpoints = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 };
    }
}
export const TsResponsive = {
    isVisible: isVisible,
    init: init,
    data: getData()
};
//# sourceMappingURL=index.js.map