import classnames from 'classnames'

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  className,
  ...rest
}) {
  const classes = classnames(
    className,
    'flex items-center py-1.5 px-3 border',
    {
      'bg-blue-600 border-blue-600': primary,
      'bg-gray-900 border-gray-900': secondary,
      'bg-green-500 border-green-500': success,
      'bg-yellow-600 border-yellow-600': warning,
      'bg-red-600 border-red-600': danger,
      'text-white':
        !outline && (primary || secondary || success || warning || danger),
      'rounded-full ': rounded,
      'bg-transparent': outline,
      'text-blue-600': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-600': outline && success,
      'text-yellow-600': outline && warning,
      'text-red-600': outline && danger,
    }
  )

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  )
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(
      !!primary + !!secondary + !!success + !!warning + !!danger
    )
    if (count > 1) {
      return new Error(
        'You can not define more than one of these props:"primany, secondary, success, warning, danger"'
      )
    }
  },
}

export default Button
