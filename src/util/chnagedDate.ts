export const changedDate = (date: string): string => {
  return `${date.slice(0, 4)}년 ${date.slice(5, 7)}월 ${date.slice(8, 10)}일`
}