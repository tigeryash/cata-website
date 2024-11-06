export type ThemeState = {
  bg: string;
  title: string;
  fontColor: HexColor;
  buttonColor: HexColor;
  buttonTextColor: HexColor;
  buttonText: string;
  bgImage: string;
  raffleImage: string;
};

export type HexColor = `#${string}`;
