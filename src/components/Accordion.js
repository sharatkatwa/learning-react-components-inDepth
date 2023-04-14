function Accordion({ items }) {
  const renderedItems = items.map((item) => (
    <div key={item.id}>
      <div>{item.label}</div>
      <div>{item.content}</div>
    </div>
  ))

  return <div>{renderedItems}</div>
}

export default Accordion
