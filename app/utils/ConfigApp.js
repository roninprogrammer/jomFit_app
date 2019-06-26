
//////////////////// CONFIG APP

import Expo from 'expo';

const isStandAloneApp = Expo.Constants.appOwnership == "standalone";

const ConfigApp = {

    // backend url
    URL: "http://jomfit.000webhostapp.com",
    BANNER_ID: "ca-app-pub-8830317488279418~4145071133",
    // interstitial admob unit id
    INTERSTITIAL_ID: "ca-app-pub-8830317488279418~4145071133",
    TESTDEVICE_ID : isStandAloneApp?"EMULATOR" : "EMULATOR"
};

export default ConfigApp;
