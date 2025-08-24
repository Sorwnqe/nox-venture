export function jumpAnchor(target: string) {
  const anchorElement = document.getElementById(`${target}`)

  if (anchorElement) {
    anchorElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    })
  }
}
