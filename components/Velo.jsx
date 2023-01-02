const {target} = require('../output.config');

export const Velo = ({children}) => {
  if (target !== 'velo') return;

  return <>{children}</>
}