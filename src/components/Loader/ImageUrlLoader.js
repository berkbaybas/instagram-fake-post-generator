import React from "react";
import ContentLoader from "react-content-loader";

const ImageUrlLoader = (props) => (
  <ContentLoader
    speed={2}
    width={64}
    height={64}
    viewBox="0 0 64 64"
    backgroundColor="#afafaf"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="32" cy="32" r="32" />
  </ContentLoader>
);

export default ImageUrlLoader;
