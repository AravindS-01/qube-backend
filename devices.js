const express = require('express');

const { getAllAppliances, getApplianceInfo } = require('./deviceController.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.get('/api/v1/appliances', (req, res) => {
    const appliances = getAllAppliances();
    res.json(appliances);
});

app.get('/api/v1/appliance/:applianceId/info', (req, res) => {
    const applianceId = req.params.applianceId;
    const applianceInfo = getApplianceInfo(applianceId);
    res.json(applianceInfo);
});




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});