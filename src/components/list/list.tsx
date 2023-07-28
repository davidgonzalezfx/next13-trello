import Card from '../card'

interface ListProps {
  title: string
  cards: any[]
}

const List: React.FC<ListProps> = ({ title, cards }) => {
  return (
    <div className='bg-gray-200 p-2 rounded-md h-full w-72 flex-shrink-0'>
      <h2 className='text-lg font-bold'>{title}</h2>

      <div className='mt-4'>
        {cards.map((card) => (
          <Card key={card.title} title={card.title} labels={card.labels} image={card.avatar} />
        ))}
      </div>
    </div>
  )
}

export default List
