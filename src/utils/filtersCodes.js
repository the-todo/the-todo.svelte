export const CODES = [
  { code: 'AAA', label: 'ㄱㄱㄱ', },
  { code: 'BBB', label: 'ㄴㄴㄴ', },
  { code: 'CCC', label: 'ㄷㄷㄷ', },
  { code: 'DDD', label: 'ㅋㅋㅋ', },
];

export const codes = (code) => {
  const ii = CODES.find(CODE => CODE.code === code);
  if (ii) {
    return ii.label;
  }
  return '???';
};
