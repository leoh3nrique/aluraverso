import React from "react";
import { InfoVideoContext } from "../Timeline";
import { StyledCard } from "./styled";

export default function Video() {
  const video = React.useContext(InfoVideoContext);

  return (
    <StyledCard>
      <iframe
        src={video.url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <h1>{video.title}</h1>
    </StyledCard>
  );
}
