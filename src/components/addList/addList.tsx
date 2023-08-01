import { useState } from 'react'

interface AddListProps {
  onAddList: (title: string) => void
}

const AddList: React.FC<AddListProps> = ({ onAddList }) => {
  const [input, setInput] = useState('')

  return (
    <div className='bg-blue-400 p-2 rounded-md h-full w-72 flex-shrink-0'>
      <form
        className='w-full h-full flex items-center justify-center'
        onSubmit={(e) => {
          e.preventDefault()
          setInput('')
          onAddList(input)
        }}
      >
        <svg
          className='w-6 h-6 text-gray-500'
          fill='white'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            color='white'
          ></path>
        </svg>
        <input
          className='w-full h-full p-2 rounded-md focus:outline-none bg-blue-400 text-white placeholder-white placeholder-opacity-50'
          type='text'
          placeholder='Add new list'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onBlur={() => setInput('')}
        />
      </form>
    </div>
  )
}

export default AddList
