import { atom } from 'jotai'

export interface Field {
  name: string
  type: string
  key: string
}

export const fieldsAtom = atom<Field[]>([])
