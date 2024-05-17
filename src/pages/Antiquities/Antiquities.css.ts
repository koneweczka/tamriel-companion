import { style } from '@vanilla-extract/css';

export default {
  container: style({
    marginTop: '100px',
    textAlign: 'center',
    alignItems: 'center',
  }),

  title: style({
    marginBottom: '20px',
  }),

  buttonFlex: style({
    width: 'fit-content',
    textAlign: 'center',
    margin: '0 auto',
  }),
};
