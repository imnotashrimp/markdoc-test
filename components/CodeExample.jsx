import ReactMarkdown from 'react-markdown';

export const CodeExample = ({frontmatter}) => {
  const {restConfig, veloConfig, codeExamples, output, rpcMethod} = frontmatter;
  const {requestObj, responseObj} = codeExamples.basic;

  if (output === 'rest') {
    const constructedRequest = `
    curl -X POST \
      '${restConfig.endpointUrl}' \
      -H 'Authorization: <AUTH>' \
      -H 'Content-Type: application/json' \
      -data-binary '${requestObj}'
    `;

    const returnVal = `
      ### Request

      \`\`\`sh
      ${constructedRequest}
      \`\`\`

      ### Response

      \`\`\`json
      ${responseObj}
      \`\`\`

    `

    return <>
      <ReactMarkdown>{returnVal}</ReactMarkdown>
    </>
  }

  if (output === 'velo') {
    const {module: MODULE, submodule: SUBMODULE, params: PARAMS, responseObjName: ENTITY_NAME} = veloConfig;
    const fnNameArr = rpcMethod.split(/(?=[A-Z])/g);
    fnNameArr[0] = fnNameArr[0].toLowerCase();
    const fnName = fnNameArr.join('') + '()';

    const constructedRequest = `
      import { ${SUBMODULE} } from '${MODULE}';

      export async function myFunction(${PARAMS}) {
        try {
          const ${ENTITY_NAME} = await ${SUBMODULE}.FN_NAME(${PARAMS});
          return ${ENTITY_NAME};
        } catch (error) {
          console.error(error);
          // Handle the error
        }
      }
    `.replace('FN_NAME', fnName);

    const returnVal = `
      \`\`\`js
        ${constructedRequest}

        /* Promise resolves to:
        ${responseObj.replace(/^/gm, ' * ')}
        */
      \`\`\`
    `;

    return <ReactMarkdown>
      {returnVal}
    </ReactMarkdown>
  }
}