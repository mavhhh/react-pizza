import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={489}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle x="10" cx="140" cy="120" r="120" />
    <rect x="0" y="255" rx="8" ry="8" width="280" height="45" />
    <rect x="0" y="320" rx="8" ry="8" width="280" height="86" />
    <rect x="0" y="425" rx="8" ry="8" width="110" height="45" />
    <rect x="140" y="425" rx="28" ry="28" width="130" height="45" />
  </ContentLoader>
);
