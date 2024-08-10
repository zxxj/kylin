export const setLocalItem = (key: string, value: string) => localStorage.setItem(key, value)

export const getLocalItem = (key: string) => localStorage.getItem(key)

export const removeLocalItem = (key: string) => localStorage.removeItem(key)

export const clearAllLocal = () => localStorage.clear()
