export const trimOn = (str: string, on: number) => {
  if (str && str.length > on) {
    let arr = str.slice(0, on);
    let name = arr + "...";
    return name;
  } else {
    return str;
  }
};
