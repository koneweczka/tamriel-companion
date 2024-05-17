import { style } from '@vanilla-extract/css';
// import { vars } from '../theme';

export default {
  container: style({
    marginTop: '100px',
    textAlign: 'center',
  }),

  box: style({
    display: 'inline-flex',
    flexDirection: 'column',
  }),

  buttons: style({
    display: 'block',
    padding: '0 1em',
    textAlign: 'center',
    alignItems: 'center',
    height: '50px',
    width: 'auto',
    border: '1px solid',
    marginBottom: '10px',
  }),

  icon: style({
    width: '15px',
    height: '15px',
    margin: '0 auto',
    whiteSpace: 'nowrap',
    textAlign: 'center',
  }),
};
