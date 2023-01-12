import express from 'express';
import process from 'process';
let appInsights = require("applicationinsights");

const connString = process.env.APP_INSIGHTS_CONN_STRING;

const app = express();
const port = 3000;
app.get('/', (req, res) => {
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
  client.trackEvent(
    {
      name: "MihaminaCustomEvent",
      properties: {
        customProperty: "custom property value"
      }
    }
  );
  client.trackException(
    {
      exception: new Error("Mihamina Exception")
    }
  );
  client.trackMetric(
    {
      name: "Mihamina custom metric",
      value: 3
    }
  );
  client.trackTrace(
    {
      message: "Mihamina trace message"
    }
  );
  client.trackDependency(
    {
      target:"http://mihamina.rktmb.org/",
      name:"Mihamina select customers proc",
      data:"SELECT * FROM MihaminaCustomers",
      duration:231,
      resultCode:0,
      success: true,
      dependencyTypeName: "ZSQL"
    });
  client.trackRequest(
    {
      name:"GET /customers",
      url:"http://mihamina.rktmb.org/customers",
      duration:309,
      resultCode:200,
      success:true}
  );
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log('Express is listening at http://localhost:'+port);
});

