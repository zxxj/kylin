export const setLocalItem = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value))

export const getLocalItem = (key: string): any => {
  const result: any = localStorage.getItem(key)
  return JSON.parse(result)
}

export const removeLocalItem = (key: string) => localStorage.removeItem(key)

export const clearAllLocal = () => localStorage.clear()
