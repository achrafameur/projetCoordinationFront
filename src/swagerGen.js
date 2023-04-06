const { codegen } = require("swagger-axios-codegen");
codegen({
  methodNameMode: "operationId",
  remoteUrl: "http://localhost:3000/api-json",
});
