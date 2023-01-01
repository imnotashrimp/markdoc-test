export const Method = ({frontmatter}) => {
  const {rpcMethod, output} = frontmatter;

  const arr = rpcMethod.split(/(?=[A-Z])/g);

  switch (output) {
    case 'rest':
      return <>arr.join(' ')</>;
    case 'velo':
      arr[0] = arr[0].toLowerCase();
      return <>`${arr.join('')}()`</>;
  }
}