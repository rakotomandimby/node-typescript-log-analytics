# Proof of concept

1. Create a Log Analytics Workspace
2. Create an Application Insights and associate it to the Log Analytics Workspace
3. Get the connection string of the Application Insights and put it in an environment variable
4. copy-paste the lines below

```bash
export APP_INSIGHTS_CONN_STRING="InstrumentationKey=xxxxx;IngestionEndpoint=https://eastus2-3.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus2.livediagnostics.monitor.azure.com/"
export NODE_BIN="/home/mihamina/Apps/node/bin"

${NODE_BIN}/npm install
${NODE_BIN}/npx tsc
${NODE_BIN}/node dist/app.js
```
