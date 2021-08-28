// eslint-disable-next-line @typescript-eslint/ban-types
const compose = (...fnArr: Function[]) =>
  fnArr.reduce(
    (acc, cur) => (...args: any[]) => cur(acc(...args)),
    (k: any) => k
  );

export default compose;
