import React from "react";

const WebsitePreview = ({ url }) => {
  return (
    <div>
      <iframe
        title="Website Preview"
        src={url}
        width="600"
        height="400"
        allowFullScreen
        //TODO: how to set the background when no internet
      />
    </div>
  );
};

export default WebsitePreview;
