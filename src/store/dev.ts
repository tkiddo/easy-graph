import { atom } from 'jotai'

export const wordAtom = atom('hello')

export const upperWordAtom = atom((get) => get(wordAtom).toUpperCase())
