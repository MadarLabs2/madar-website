import { Link } from 'react-router-dom'
import cn from '../../utils/cn'
import styles from './ui.module.css'

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}) {
  const classes = cn(styles.button, styles[variant], styles[size], fullWidth && styles.full, className)
  if (to) return <Link className={classes} to={to} {...props}>{children}</Link>
  if (href) return <a className={classes} href={href} {...props}>{children}</a>
  return <button className={classes} type={props.type || 'button'} {...props}>{children}</button>
}
