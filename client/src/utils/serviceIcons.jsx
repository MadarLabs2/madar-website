import { Braces } from 'lucide-react'
import serviceIconMap from './serviceIconMap'

export function ServiceIcon({ name = 'software', ...props }) {
  const Icon = serviceIconMap[name] || Braces
  return <Icon aria-hidden="true" {...props} />
}
