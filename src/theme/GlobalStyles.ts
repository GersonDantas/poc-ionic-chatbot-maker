import { createGlobalStyle } from "styled-components";
import "../assets/icons/CBM Icons/cbm-icons.css"

export default createGlobalStyle`
    @font-face {
      font-family: 'Inter-Black';
      font-style: normal;
      font-weight: normal;
      src: url('../assets/fonts/Inter-Black.ttf');
    }
    @font-face {
      font-family: 'Inter-Bold';
      font-style:  normal;
      font-weight: 600;
      src: url('../assets/fonts/Inter-Bold.ttf');
    }
    @font-face {
      font-family: 'Inter-ExtraBold';
      font-style:  normal;
      font-weight: 700;
      src: url('../assets/fonts/Inter-ExtraBold.ttf');
    }
    @font-face {
      font-family: 'Inter-ExtraLight';
      font-style:  normal;
      font-weight: 100;
      src: url('../assets/fonts/Inter-ExtraLight.ttf');
    }
    @font-face {
      font-family: 'Inter-Medium';
      font-style:  normal;
      font-weight: 400;
      src: url('../assets/fonts/Inter-Medium.ttf');
    }
    @font-face {
      font-family: 'Inter-Thin';
      font-style:  normal;
      font-weight: 100;
      src: url('../assets/fonts/Inter-Thin.ttf');
    }
  :root {
    --ion-font-family: sans-serif;
    --ion-margin: 0;
    --ion-padding: 0;
  /** primary **/
    --ion-color-primary: #4E55FD;
    --ion-color-primary-rgb: 78,85,253;
    --ion-color-primary-contrast: #ffffff;
    --ion-color-primary-contrast-rgb: 255,255,255;
    --ion-color-primary-shade: #454bdf;
    --ion-color-primary-tint: #6066fd;

    --ion-color-secondary: #3dc2ff;
    --ion-color-secondary-rgb: 61,194,255;
    --ion-color-secondary-contrast: #ffffff;
    --ion-color-secondary-contrast-rgb: 255,255,255;
    --ion-color-secondary-shade: #36abe0;
    --ion-color-secondary-tint: #50c8ff;

    --ion-color-tertiary: #26297a;
    --ion-color-tertiary-rgb: 82,96,255;
    --ion-color-tertiary-contrast: #ffffff;
    --ion-color-tertiary-contrast-rgb: 255,255,255;
    --ion-color-tertiary-shade: #3539a7;
    --ion-color-tertiary-tint: #6370ff;

    --ion-color-success: #2dd36f;
    --ion-color-success-rgb: 45,211,111;
    --ion-color-success-contrast: #ffffff;
    --ion-color-success-contrast-rgb: 255,255,255;
    --ion-color-success-shade: #28ba62;
    --ion-color-success-tint: #42d77d;

    --ion-color-warning: #ffc409;
    --ion-color-warning-rgb: 255,196,9;
    --ion-color-warning-contrast: #000000;
    --ion-color-warning-contrast-rgb: 0,0,0;
    --ion-color-warning-shade: #e0ac08;
    --ion-color-warning-tint: #ffca22;

    --ion-color-danger: #eb445a;
    --ion-color-danger-rgb: 235,68,90;
    --ion-color-danger-contrast: #ffffff;
    --ion-color-danger-contrast-rgb: 255,255,255;
    --ion-color-danger-shade: #cf3c4f;
    --ion-color-danger-tint: #ed576b;

    --ion-color-dark: #222428;
    --ion-color-dark-rgb: 34,36,40;
    --ion-color-dark-contrast: #ffffff;
    --ion-color-dark-contrast-rgb: 255,255,255;
    --ion-color-dark-shade: #1e2023;
    --ion-color-dark-tint: #383a3e;

    --ion-color-medium: #92949c;
    --ion-color-medium-rgb: 146,148,156;
    --ion-color-medium-contrast: #ffffff;
    --ion-color-medium-contrast-rgb: 255,255,255;
    --ion-color-medium-shade: #808289;
    --ion-color-medium-tint: #9d9fa6;

    --ion-color-light: #f4f5f8;
    --ion-color-light-rgb: 244,245,248;
    --ion-color-light-contrast: #000000;
    --ion-color-light-contrast-rgb: 0,0,0;
    --ion-color-light-shade: #d7d8da;
    --ion-color-light-tint: #f5f6f9;


    --ion-background-color: #f8fafb;
    --ion-background-color-rgb: 248,250,251;

    --ion-text-color: #676a6c;
    --ion-text-color-rgb: 103,106,113;

    --ion-shadow-color: #cacaca;

    --ion-color-step-50: #f1f3f4;
    --ion-color-step-100: #eaeced;
    --ion-color-step-150: #e2e4e6;
    --ion-color-step-200: #dbdddf;
    --ion-color-step-250: #d4d6d9;
    --ion-color-step-300: #cdcfd2;
    --ion-color-step-350: #c5c8cb;
    --ion-color-step-400: #bec0c4;
    --ion-color-step-450: #b7b9bd;
    --ion-color-step-500: #b0b2b6;
    --ion-color-step-550: #a8abaf;
    --ion-color-step-600: #a1a4a8;
    --ion-color-step-650: #9a9ca1;
    --ion-color-step-700: #93959a;
    --ion-color-step-750: #8b8e94;
    --ion-color-step-800: #84878d;
    --ion-color-step-850: #7d8086;
    --ion-color-step-900: #76787f;
    --ion-color-step-950: #6e7178;

    --ion-card-background: #fff;
    --ion-card-background-rgb: 255 255 255;


    --ion-card-background-contrast: #f9f9f9;
    --ion-card-background-contrast-rgb: 249 249 249;
  }

  .border-radius-5 {
    border-radius: 5px;
  }

  .div-100-porcentagem {
    width: 100%;
  }

  .div-teste {
    width: 100%;
    min-height: 50px;
    background: #000000;
  }

  @media (prefers-color-scheme: dark) {
  /*
  * Dark Colors
  * -------------------------------------------
  */

  body {
    --ion-color-primary: #428cff;
    --ion-color-primary-rgb: 66, 140, 255;
    --ion-color-primary-contrast: #ffffff;
    --ion-color-primary-contrast-rgb: 255, 255, 255;
    --ion-color-primary-shade: #3a7be0;
    --ion-color-primary-tint: #5598ff;

    --ion-color-secondary: #50c8ff;
    --ion-color-secondary-rgb: 80, 200, 255;
    --ion-color-secondary-contrast: #ffffff;
    --ion-color-secondary-contrast-rgb: 255, 255, 255;
    --ion-color-secondary-shade: #46b0e0;
    --ion-color-secondary-tint: #62ceff;

    --ion-color-tertiary: #26297a;
    --ion-color-tertiary-rgb: 106, 100, 255;
    --ion-color-tertiary-contrast: #ffffff;
    --ion-color-tertiary-contrast-rgb: 255, 255, 255;
    --ion-color-tertiary-shade: #3539a7;
    --ion-color-tertiary-tint: #7974ff;

    --ion-color-success: #2fdf75;
    --ion-color-success-rgb: 47, 223, 117;
    --ion-color-success-contrast: #000000;
    --ion-color-success-contrast-rgb: 0, 0, 0;
    --ion-color-success-shade: #29c467;
    --ion-color-success-tint: #44e283;

    --ion-color-warning: #ffd534;
    --ion-color-warning-rgb: 255, 213, 52;
    --ion-color-warning-contrast: #000000;
    --ion-color-warning-contrast-rgb: 0, 0, 0;
    --ion-color-warning-shade: #e0bb2e;
    --ion-color-warning-tint: #ffd948;

    --ion-color-danger: #ff4961;
    --ion-color-danger-rgb: 255, 73, 97;
    --ion-color-danger-contrast: #ffffff;
    --ion-color-danger-contrast-rgb: 255, 255, 255;
    --ion-color-danger-shade: #e04055;
    --ion-color-danger-tint: #ff5b71;

    --ion-color-dark: #f4f5f8;
    --ion-color-dark-rgb: 244, 245, 248;
    --ion-color-dark-contrast: #000000;
    --ion-color-dark-contrast-rgb: 0, 0, 0;
    --ion-color-dark-shade: #d7d8da;
    --ion-color-dark-tint: #f5f6f9;

    --ion-color-medium: #989aa2;
    --ion-color-medium-rgb: 152, 154, 162;
    --ion-color-medium-contrast: #000000;
    --ion-color-medium-contrast-rgb: 0, 0, 0;
    --ion-color-medium-shade: #86888f;
    --ion-color-medium-tint: #a2a4ab;

    --ion-color-light: #222428;
    --ion-color-light-rgb: 34, 36, 40;
    --ion-color-light-contrast: #ffffff;
    --ion-color-light-contrast-rgb: 255, 255, 255;
    --ion-color-light-shade: #1e2023;
    --ion-color-light-tint: #383a3e;

    --ion-card-background-contrast: #242424;
    --ion-card-background-contrast-rgb: 36 36 36;
  }

  /*
  * iOS Dark Theme
  * -------------------------------------------
  */

  .ios body {
    --ion-background-color: #000000;
    --ion-background-color-rgb: 0, 0, 0;

    --ion-text-color: #ffffff;
    --ion-text-color-rgb: 255, 255, 255;

    --ion-shadow-color: #262626;

    --ion-color-step-50: #0d0d0d;
    --ion-color-step-100: #1a1a1a;
    --ion-color-step-150: #262626;
    --ion-color-step-200: #333333;
    --ion-color-step-250: #404040;
    --ion-color-step-300: #4d4d4d;
    --ion-color-step-350: #595959;
    --ion-color-step-400: #666666;
    --ion-color-step-450: #737373;
    --ion-color-step-500: #808080;
    --ion-color-step-550: #8c8c8c;
    --ion-color-step-600: #999999;
    --ion-color-step-650: #a6a6a6;
    --ion-color-step-700: #b3b3b3;
    --ion-color-step-750: #bfbfbf;
    --ion-color-step-800: #cccccc;
    --ion-color-step-850: #d9d9d9;
    --ion-color-step-900: #e6e6e6;
    --ion-color-step-950: #f2f2f2;

    --ion-item-background: #000000;

    --ion-card-background: #1c1c1d;
    --ion-card-background-rgb: 28 28 29;
  }

  .ios ion-modal {
    --ion-background-color: var(--ion-color-step-100);
    --ion-toolbar-background: var(--ion-color-step-150);
    --ion-toolbar-border-color: var(--ion-color-step-250);
    --ion-shadow-color: #262626;
  }


  /*
  * Material Design Dark Theme
  * -------------------------------------------
  */

  .md body {
    --ion-background-color: #121212;
    --ion-background-color-rgb: 18, 18, 18;

    --ion-text-color: #ffffff;
    --ion-text-color-rgb: 255, 255, 255;

    --ion-shadow-color: #262626;

    --ion-border-color: #222222;

    --ion-color-step-50: #1e1e1e;
    --ion-color-step-100: #2a2a2a;
    --ion-color-step-150: #363636;
    --ion-color-step-200: #414141;
    --ion-color-step-250: #4d4d4d;
    --ion-color-step-300: #595959;
    --ion-color-step-350: #656565;
    --ion-color-step-400: #717171;
    --ion-color-step-450: #7d7d7d;
    --ion-color-step-500: #898989;
    --ion-color-step-550: #949494;
    --ion-color-step-600: #a0a0a0;
    --ion-color-step-650: #acacac;
    --ion-color-step-700: #b8b8b8;
    --ion-color-step-750: #c4c4c4;
    --ion-color-step-800: #d0d0d0;
    --ion-color-step-850: #dbdbdb;
    --ion-color-step-900: #e7e7e7;
    --ion-color-step-950: #f3f3f3;

    --ion-item-background: #1e1e1e;

    --ion-toolbar-background: #1f1f1f;

    --ion-tab-bar-background: #1f1f1f;

    --ion-card-background: #1e1e1e;
    --ion-card-background-rgb: 30 30 30;
  }
  }

  /* Dark theme */

  body.dark {
  --ion-color-primary: #428cff;
  --ion-color-primary-rgb: 66, 140, 255;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-contrast-rgb: 255, 255, 255;
  --ion-color-primary-shade: #3a7be0;
  --ion-color-primary-tint: #5598ff;

  --ion-color-secondary: #50c8ff;
  --ion-color-secondary-rgb: 80, 200, 255;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255, 255, 255;
  --ion-color-secondary-shade: #46b0e0;
  --ion-color-secondary-tint: #62ceff;

  --ion-color-tertiary: #3e407b;
  --ion-color-tertiary-rgb: 106, 100, 255;
  --ion-color-tertiary-contrast: #ffffff;
  --ion-color-tertiary-contrast-rgb: 255, 255, 255;
  --ion-color-tertiary-shade: #5456a7;
  --ion-color-tertiary-tint: #7974ff;

  --ion-color-success: #2fdf75;
  --ion-color-success-rgb: 47, 223, 117;
  --ion-color-success-contrast: #000000;
  --ion-color-success-contrast-rgb: 0, 0, 0;
  --ion-color-success-shade: #29c467;
  --ion-color-success-tint: #44e283;

  --ion-color-warning: #ffd534;
  --ion-color-warning-rgb: 255, 213, 52;
  --ion-color-warning-contrast: #000000;
  --ion-color-warning-contrast-rgb: 0, 0, 0;
  --ion-color-warning-shade: #e0bb2e;
  --ion-color-warning-tint: #ffd948;

  --ion-color-danger: #ff4961;
  --ion-color-danger-rgb: 255, 73, 97;
  --ion-color-danger-contrast: #ffffff;
  --ion-color-danger-contrast-rgb: 255, 255, 255;
  --ion-color-danger-shade: #e04055;
  --ion-color-danger-tint: #ff5b71;

  --ion-color-dark: #f4f5f8;
  --ion-color-dark-rgb: 244, 245, 248;
  --ion-color-dark-contrast: #000000;
  --ion-color-dark-contrast-rgb: 0, 0, 0;
  --ion-color-dark-shade: #d7d8da;
  --ion-color-dark-tint: #f5f6f9;

  --ion-color-medium: #989aa2;
  --ion-color-medium-rgb: 152, 154, 162;
  --ion-color-medium-contrast: #000000;
  --ion-color-medium-contrast-rgb: 0, 0, 0;
  --ion-color-medium-shade: #86888f;
  --ion-color-medium-tint: #a2a4ab;

  --ion-color-light: #222428;
  --ion-color-light-rgb: 34, 36, 40;
  --ion-color-light-contrast: #ffffff;
  --ion-color-light-contrast-rgb: 255, 255, 255;
  --ion-color-light-shade: #1e2023;
  --ion-color-light-tint: #383a3e;
  
  --ion-card-background-contrast: #242424;
  --ion-card-background-contrast-rgb: 36 36 36;

  --ion-shadow-color: #262626;

  }

  /*
  * iOS Dark Theme
  * -------------------------------------------
  */

  .ios body.dark {
  --ion-background-color: #000000;
  --ion-background-color-rgb: 0, 0, 0;

  --ion-text-color: #ffffff;
  --ion-text-color-rgb: 255, 255, 255;

  --ion-shadow-color: #262626;

  --ion-color-step-50: #0d0d0d;
  --ion-color-step-100: #1a1a1a;
  --ion-color-step-150: #262626;
  --ion-color-step-200: #333333;
  --ion-color-step-250: #404040;
  --ion-color-step-300: #4d4d4d;
  --ion-color-step-350: #595959;
  --ion-color-step-400: #666666;
  --ion-color-step-450: #737373;
  --ion-color-step-500: #808080;
  --ion-color-step-550: #8c8c8c;
  --ion-color-step-600: #999999;
  --ion-color-step-650: #a6a6a6;
  --ion-color-step-700: #b3b3b3;
  --ion-color-step-750: #bfbfbf;
  --ion-color-step-800: #cccccc;
  --ion-color-step-850: #d9d9d9;
  --ion-color-step-900: #e6e6e6;
  --ion-color-step-950: #f2f2f2;

  --ion-item-background: #000000;

  --ion-card-background: #1c1c1d;
  --ion-card-background-rgb: 28 28 29;
  }

  .ios ion-modal.dark {
  --ion-background-color: var(--ion-color-step-100);
  --ion-toolbar-background: var(--ion-color-step-150);
  --ion-toolbar-border-color: var(--ion-color-step-250);

  --ion-shadow-color: #262626;
  }


  /*
  * Material Design Dark Theme
  * -------------------------------------------
  */

  .md body.dark {
  --ion-background-color: #121212;
  --ion-background-color-rgb: 18, 18, 18;

  --ion-text-color: #ffffff;
  --ion-text-color-rgb: 255, 255, 255;

  --ion-shadow-color: #262626;

  --ion-border-color: #222222;

  --ion-color-step-50: #1e1e1e;
  --ion-color-step-100: #2a2a2a;
  --ion-color-step-150: #363636;
  --ion-color-step-200: #414141;
  --ion-color-step-250: #4d4d4d;
  --ion-color-step-300: #595959;
  --ion-color-step-350: #656565;
  --ion-color-step-400: #717171;
  --ion-color-step-450: #7d7d7d;
  --ion-color-step-500: #898989;
  --ion-color-step-550: #949494;
  --ion-color-step-600: #a0a0a0;
  --ion-color-step-650: #acacac;
  --ion-color-step-700: #b8b8b8;
  --ion-color-step-750: #c4c4c4;
  --ion-color-step-800: #d0d0d0;
  --ion-color-step-850: #dbdbdb;
  --ion-color-step-900: #e7e7e7;
  --ion-color-step-950: #f3f3f3;

  --ion-item-background: #1e1e1e;

  --ion-toolbar-background: #1f1f1f;

  --ion-tab-bar-background: #1f1f1f;

  --ion-card-background: #1e1e1e;
  --ion-card-background-rgb: 30 30 30;
  }
`;
