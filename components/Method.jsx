import React from 'react';
import ReactMarkdown from 'react-markdown';
const {target} = require('../output.config');

export const Method = ({frontmatter}) => {
  const {rpcMethod} = frontmatter;

  const arr = rpcMethod.split(/(?=[A-Z])/g);
  let response;

  switch (target) {
    case 'rest':
       response = arr.join(' ');
       break;
    case 'velo':
      arr[0] = arr[0].toLowerCase();
      response = `\`${arr.join('')}()\``
      break;
  }

  return <ReactMarkdown children={response} />
}