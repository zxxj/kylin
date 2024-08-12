export const LOGIN_NAME = '/login'
export const PAGE_NOT_FOUND = 'PageNotFound'

export const whiteNameList = [LOGIN_NAME, PAGE_NOT_FOUND] as const
export type whiteNameList = typeof whiteNameList
