import React from "react";
import ContentLoader from "react-content-loader";

const ImageLoader = (props) => (
  <ContentLoader
    speed={2}
    width={600}
    height={600}
    viewBox="0 0 600 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="<0" rx="2" ry="2" width="600" height="600" />
  </ContentLoader>
);

export default ImageLoader;
