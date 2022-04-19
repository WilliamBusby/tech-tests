
export const stringRotation = (string1, string2) => {
  return (string1+string1).indexOf(string2) !== -1 && (string1.length === string2.length);
}