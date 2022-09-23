import React from "react";

const testPost = (
  <iframe
    title="test"
    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FMyTinyKitchenCooking%2Fvideos%2F604185491194415%2F&show_text=false&width=267&t=0"
    width="267"
    height="476"
    style={{ border: "none", overflow: "hidden" }}
    scrolling="no"
    frameborder="0"
    allowfullscreen="true"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    allowFullScreen="true"
  ></iframe>
);

export const Post = () => {
  return <div>{testPost}</div>;
};
