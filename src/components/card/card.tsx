import Image from 'next/image'
import { Draggable } from 'react-beautiful-dnd'

interface CardProps {
  title: string
  image: string
  labels: string[]
  index: number
}

const Card: React.FC<CardProps> = ({ title, labels, image, index }) => {
  return (
    <Draggable draggableId={title} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <div className='bg-white p-3 rounded-md shadow mt-2'>
            <div className='flex items-center mb-2'>
              {labels.map((label, idx) => (
                <span
                  key={`${title}-${label}-${idx}`}
                  className={`bg-${
                    idx % 2 === 0 ? 'blue' : 'yellow'
                  }-200 px-2 py-1 text-xs rounded-full mr-2`}
                >
                  {label}
                </span>
              ))}
            </div>

            <h3 className='text-md font-bold mb-2'>{title}</h3>

            <div className='flex items-center mt-3'>
              <Image
                className='rounded-full'
                width={16}
                height={16}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
                alt='Avatar'
              />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default Card
