export function cn(...values) {
  return values.flat().filter(Boolean).join(' ')
}

export default cn
