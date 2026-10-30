import { useEffect, useState } from 'react'

// Types and deletes each word in turn. Pass a stable array (module constant).
export default function useTyping(words, speed = 80, pause = 1400) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    let delay = deleting ? 40 : speed
    if (!deleting && text === word) delay = pause

    const timer = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true)
      if (deleting && text === '') {
        setDeleting(false)
        return setIndex((index + 1) % words.length)
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index, words, speed, pause])

  return text
}
