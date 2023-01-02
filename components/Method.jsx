import React from 'react';
import ReactMarkdown from 'react-markdown';

export const Method = ({frontmatter}) => {
  const {rpcMethod, output} = frontmatter;

  const arr = rpcMethod.split(/(?=[A-Z])/g);
  let response;

  switch (output) {
    case 'rest':
       response = arr.join(' ');
       break;
    case 'velo':
      arr[0] = arr[0].toLowerCase();
      response = `\`${arr.join('')}()\``
      break;
  }

  return <ReactMarkdown>{response}</ReactMarkdown>
}