import React from "react";

exports.onRenderBody = ({ setPostBodyComponents }, { pixelId }) => {
  if (typeof pixelId !== "string") {
    console.error("Proof pixelId must be a string");
  }

    return setPostBodyComponents([
      <script
        async
        key={"gatsby-plugin-proof"}
        dangerouslySetInnerHTML={{
          __html: `https://cdn.useproof.com/proof.js?acc=${pixelId}`
        }}
      />
    ]);
};
