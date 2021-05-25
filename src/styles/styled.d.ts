// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
      background: string;
      blue: string;
      lightBlue: string;
      black: string;
      white: string;
    };

    transition: string;
  }
}