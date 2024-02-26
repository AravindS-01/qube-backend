const {mockData} = require('./mockData');

function getAllAppliances() {
    return {
        appliances: mockData
    };
}

function getApplianceInfo(applianceId) {
    return mockData.find((data)=>data.serialNo === applianceId)
}

module.exports = {
    getAllAppliances,
    getApplianceInfo
};