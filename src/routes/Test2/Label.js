import { memo } from 'react';
import { css } from 'react-emotion';

const cssLabel = css({
  display: 'inline-block',
  margin: '4px 0px',
  padding: '2px 8px',
  backgroundColor: '#e0e0e0',
  borderRadius: 8,
  button: {
    backgroundColor: 'transparent',
    color: 'red',
    marginLeft: 4,
    fontSize: 22,
    padding: 0,
    border: 'none',
    outline: 'none',
  }
})

const Label = ({ label, setLabel }) => {      
  return (
    <span className={cssLabel}>
      {label}
      <button type="button" onClick={() => setLabel("")}>⊗</button>
    </span>
  )
}

export default memo(Label);
