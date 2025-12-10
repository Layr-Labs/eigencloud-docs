import React, { useEffect } from "react";
import SwaggerUI from "swagger-ui-dist/swagger-ui-es-bundle";
import "swagger-ui-dist/swagger-ui.css";

export default function ApiDocs() {
  useEffect(() => {
    SwaggerUI({
      dom_id: "#swagger-container",
      url: "/openapi.yaml",
      deepLinking: true,
    });
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <div id="swagger-container" />
    </div>
  );
}
