const {internal} = require('../output.config');

export const Internal = ({children}) => {
  if (internal !== true) return;

  return <>{children}</>
}