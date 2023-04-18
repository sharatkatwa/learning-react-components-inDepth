import Link from './Link'

function Sidebar() {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Button', path: '/button' },
    { label: 'Modal', path: '/modal' },
    { label: 'Table', path: '/table' },
  ]
  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className='mb-3'
        activeClassName='font-bold border-l-2 border-blue-500 pl-2'
      >
        {link.label}
      </Link>
    )
  })
  return (
    <div className='sticky top-0 overflow-y-scroll flex flex-col items-start scrollbar-hide'>
      {renderedLinks}
    </div>
  )
}

export default Sidebar
