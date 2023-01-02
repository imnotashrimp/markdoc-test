export const Velo = ({frontmatter, children}) => {
  if (frontmatter.output !== 'velo') return;

  return <>{children}</>
}