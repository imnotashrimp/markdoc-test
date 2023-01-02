const {target} = require('../output.config');

export const Rest = ({children}) => {
  if (target !== 'rest') return;

  return <>{children}</>
}