import React from 'react';

const testPost = (
  <iframe
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    allowfullscreen="true"
    frameborder="0"
    height="476"
    scrolling="no"
    //eslint-disable-next-line max-len
    src='https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FMyTinyKitchenCooking%2Fvideos%2F604185491194415%2F&show_text=false&width=267&t=0'
    style={{ border: 'none', overflow: 'hidden' }}
    title="test"
    width="267"
  ></iframe>
);

export const Post = () =>  <div>{testPost}</div>;
