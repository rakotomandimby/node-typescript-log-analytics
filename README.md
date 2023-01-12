# Proof of concept

```bash
export APP_INSIGHTS_CONN_STRING="InstrumentationKey=xxxxx;IngestionEndpoint=https://eastus2-3.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus2.livediagnostics.monitor.azure.com/"
export NODE_BIN="/home/mihamina/Apps/node/bin"
${NODE_BIN}/npx tsc
${NODE_BIN}/node dist/app.js
```
