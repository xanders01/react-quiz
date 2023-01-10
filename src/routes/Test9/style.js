import { css } from 'react-emotion';

export const cssSpace = css({
  marginTop: 24,
  width: 800,
  height: 800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
  position: 'relative',
  overflow: 'hidden'
});

export const cssSun = css({
  width: 80,
  height: 80,
  backgroundColor: 'yellow',
  borderRadius: 40,
});

export const cssPlanet = (planetData) => {
  return css({
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: planetData.color,
    position: 'absolute',
    top: planetData.x,
    left: planetData.y,
  });
}