export const Rest = ({frontmatter, children}) => {
  if (frontmatter.output !== 'rest') return;

  return <>{children}</>
}