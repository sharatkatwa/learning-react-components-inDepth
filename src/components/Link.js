import classNames from 'classnames'
import useNavigation from '../hooks/use-navigation'

function Link({ children, to, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation()

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return
    }
    e.preventDefault()
    navigate(to)
  }

  const classes = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  )

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

export default Link
