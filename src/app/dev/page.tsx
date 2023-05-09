'use client'
import { Input } from 'antd'
import { useAtom } from 'jotai'
import { wordAtom, upperWordAtom } from '../../store/dev'

export default function Dev() {
  const [word, setWord] = useAtom(wordAtom)
  const [upperWord] = useAtom(upperWordAtom)
  return (
    <main>
      <Input
        onChange={(e) => {
          setWord(e.target.value)
        }}
        value={word}
      />
      <div>upperCase:{upperWord}</div>
    </main>
  )
}
