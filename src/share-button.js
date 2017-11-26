import PropTypes from "prop-types";
import React from "react";

import socialMediaTypes from "./social-media-types";
import { getButtonData, getIconPath, getTextContent } from "./utils";

function Icon({ socialMedia }) {
  return (
    <svg
      viewBox="0 0 512 512"
      style={{
        width: "24px",
        height: "24px",
        flex: "none",
        fill: "white",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      {getIconPath(socialMedia)}
    </svg>
  );
}

function Text({ socialMedia }) {
  return (
    <div
      style={{
        flex: "none",
        fontSize: "18px",
        textAlign: "right",
        paddingRight: "10px",
        paddingLeft: "5px"
      }}
    >
      {getTextContent(socialMedia)}
    </div>
  );
}

function Wrapper({ children, socialMedia, url, text, media }) {
  const { background, href } = getButtonData(socialMedia, url, text, media);

  return (
    <a
      style={{
        display: "flex",
        minWidth: "32px",
        height: "32px",
        width: "auto",
        alignItems: "center",
        background,
        color: "white",
        borderRadius: "5px",
        margin: "0 3px"
      }}
      target="_blank"
      href={href}
    >
      {children}
    </a>
  );
}

export default function ShareButton({
  compact,
  media,
  text,
  url,
  socialMedia
}) {
  if (socialMedia) {
    return (
      <Wrapper socialMedia={socialMedia} url={url} text={text} media={media}>
        <Icon socialMedia={socialMedia} />
        {!compact && <Text socialMedia={socialMedia} />}
      </Wrapper>
    );
  }
  return null;
}

ShareButton.propTypes = {
  compact: PropTypes.bool,
  media: PropTypes.string,
  socialMedia: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string.isRequired
};
