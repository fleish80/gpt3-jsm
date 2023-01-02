import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Manrope&display=swap');

  :root {
    --font-family: 'Manrope', sans-serif;

    --gradient-text: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
    --gradient-bar: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);

    --color-bg: #040C18;
    --color-footer: #031B34;
    --color-blog: #042c54;
    --color-text: #81AFDD;
    --color-subtext: #FF8A71;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-family);
    background: var(--color-bg);
  }

  a {
    color: unset;
    text-decoration: none;
  }

  .gradient-bg {
    background: radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);
  }

  .gradient-text {
    background: var(--gradient-text);
    background-clip: text;
  }

  .scale-up-center {
    animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  @keyframes scale-up-center {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }

  @media screen and (width > 700px) {
    .section-padding {
      padding: 4rem 6rem;
    }

    .section-margin {
      margin: 4rem 6rem;
    }
  }

  @media screen and (550px < width <= 700px) {
    .section-padding {
      padding: 4rem;
    }

    .section-margin {
      margin: 4rem;
    }
  }

  @media screen and (width <= 500px) {
    .section-padding {
      padding: 4rem 2rem;
    }

    .section-margin {
      margin: 4rem 2rem;
    }
  }
`;

export default GlobalStyle;
