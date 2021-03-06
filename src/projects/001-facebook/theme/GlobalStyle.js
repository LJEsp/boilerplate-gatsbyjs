import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600');

  ${"" /* CSS variables for sizing (and spacing) */}
  :root {
    --size-base: ${p => p.theme.size.base};
    --size-xxs: ${p => p.theme.size.xxs};
    --size-xs: ${p => p.theme.size.xs};
    --size-s: ${p => p.theme.size.s};
    --size-m: ${p => p.theme.size.m};
    --size-l: ${p => p.theme.size.l};
    --size-xl: ${p => p.theme.size.xl};

    --size-button: 2.5rem;

    @media (max-width: ${p => p.theme.breakpoint.tabletPortrait}) {
      --size-base: calc(${p => p.theme.size.base} / 1.5);
      --size-s: calc(${p => p.theme.size.s} / 1.5);
      --size-m: calc(${p => p.theme.size.m} / 1.5);
      --size-l: calc(${p => p.theme.size.l} / 1.5);
      --size-xl: calc(${p => p.theme.size.xl} / 1.5);

      --size-button: 3rem;
    }
  }  

  html, body, #___gatsby, #___gatsby > div {
     height: 100%;
  }


  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }
  
  body {
    font-family: ${p => p.theme.font.sansSerif};
    font-size: 16px;
  }

  #hidden {
    display: none;
  }
`;

export default GlobalStyle;
