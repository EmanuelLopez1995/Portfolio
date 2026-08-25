const EMAIL = 'emanicolopez@gmail.com'

function copyWithFallback(text: string) {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
}

export function useEmailContact() {
  const copied = useState<boolean>('email-copied', () => false)

  async function copyEmail() {
    if (import.meta.server) return

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL)
      } else {
        copyWithFallback(EMAIL)
      }
    } catch {
      copyWithFallback(EMAIL)
    }

    copied.value = true
  }

  return { copied, copyEmail, email: EMAIL }
}
