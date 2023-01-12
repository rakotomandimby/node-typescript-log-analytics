import express from 'express';
import process from 'process';
let appInsights = require("applicationinsights");

const connString = process.env.APP_INSIGHTS_CONN_STRING;

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  console.log(connString);
  appInsights.setup(connString)
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true, true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setUseDiskRetryCaching(true)
    .setSendLiveMetrics(true)
    .setDistributedTracingMode(appInsights.DistributedTracingModes.AI)
    .start();
  const client = appInsights.defaultClient;
  client.trackEvent({name: "MihaminaCustomEvent",
                     properties: {customProperty: "custom property value"}});
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log('Express is listening at http://localhost:'+port);
});

