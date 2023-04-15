import Accordion from '../components/Accordion'

function AccordionPage() {
  const items = [
    {
      id: '1',
      label: 'Can we use react in our projects?',
      content:
        'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to ',
    },
    {
      id: '2',
      label: 'Can we use JavaScript in our projects?',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,',
    },
    {
      id: '3',
      label: 'Can we use HTML and CSS in our projects?',
      content:
        'Of course you can use in your projects its your project who care about what you use, You can use anything you want',
    },
  ]
  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default AccordionPage
