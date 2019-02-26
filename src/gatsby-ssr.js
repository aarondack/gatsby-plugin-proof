import React from "react";

exports.onRenderBody = ({ setPostBodyComponents }, { pixelId }) => {
  if (typeof pixelId !== "string") {
    console.error("Proof url must be a string");
  }

  if (process.env.NODE_ENV === "production") {
    return setPostBodyComponents([
      <script
        async
        key={"gatsby-plugin-proof"}
        dangerouslySetInnerHTML={{
          __html: `https://cdn.useproof.com/proof.js?acc=${pixelId}`
        }}
      />
    ]);
  }
  return;
};
