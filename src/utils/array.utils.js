export const updateItemInArray = (arr, index, updateValue) => {
  if (index < 0) return arr
  return [...arr.slice(0, index), updateValue, ...arr.slice(index + 1)]
}
