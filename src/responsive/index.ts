var responsiveData: { xs?: boolean, sm?: boolean, md?: boolean, lg?: boolean, xl?: boolean } = {};
var resposiveComponents: any = {};
var responsiveConfig: TsResponsiveConfig;
var window=window||{addEventListener:()=>{}, innerWith:0};
var initialized:boolean =false;

function isVisible(elem: HTMLElement) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};

function init(config?: TsResponsiveConfig) {
    var mergedConfig = mergeConfig(config);
    window.addEventListener('resize', (e) => {
        calculateSizes();
    });
    calculateSizes();
    initialized=true;
}


function calculateSizes() {
    responsiveData.xs = window.innerWidth > responsiveConfig.breakpoints.xs;
    responsiveData.sm = window.innerWidth >= responsiveConfig.breakpoints.sm;
    responsiveData.md = window.innerWidth >= responsiveConfig.breakpoints.md;
    responsiveData.lg = window.innerWidth >= responsiveConfig.breakpoints.lg;
    responsiveData.xl = window.innerWidth >= responsiveConfig.breakpoints.xl;
}

function mergeConfig(config: TsResponsiveConfig) {
    responsiveConfig = new TsResponsiveConfig();
    return Object.assign(responsiveConfig, config);
}

function getData() {
    if(!initialized) init();
    return responsiveData;
}

export class TsResponsiveConfig {
    breakpoints: { xs?: number, sm?: number, md?: number, lg?: number, xl?: number }
    = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 };

}

export const TsResponsive = {
    isVisible: isVisible,
    init: init,
    data:getData()
    //,calculateSizes:calculateSizes
}