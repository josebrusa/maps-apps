import reactLogo from '../assets/react.svg'
export const ReactLogo = () => {
  return (
    <img
        src={reactLogo}
        alt="React Logo"
        style={{
            
            position:'fixed',
            bottom: '30px',
            right: '30px',
            width: '100px',
        }} />
  )
};
