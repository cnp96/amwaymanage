//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "AmwayManage",
    appName: "Amway",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.1.35",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "AmwayManage",
    isMFApp: false,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: null,
    secureurl: null
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    initializeTemp0bd9b6d9bc1324a();
    initializeTemp0g5badfec3f224d();
    initializetmp();
    frmGroupsGlobals();
    frmHomeGlobals();
    frmProfileGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 730190
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;