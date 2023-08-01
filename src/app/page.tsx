'use client'

import { useState } from 'react'
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd'

import Header from '@/components/header'
import List from '@/components/list'
import mockData from '@/services/mock'
import AddList from '@/components/addList'

export default function Home() {
  const [data, setData] = useState(mockData)

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return

    if (result.type === 'CARD') {
      const { source, destination } = result

      const sourceList = data.find((list) => list.title === source.droppableId)
      const destinationList = data.find((list) => list.title === destination.droppableId)

      if (!sourceList || !destinationList) return

      const [removed] = sourceList.cards.splice(source.index, 1)
      destinationList.cards.splice(destination.index, 0, removed)

      setData([...data])
    }
  }

  return (
    <main className='bg-blue-500 min-h-screen'>
      <Header />
      <div className='p-6 flex gap-4 overflow-x-auto'>
        <DragDropContext onDragEnd={onDragEnd}>
          {data.map((list) => (
            <List key={list.title} title={list.title} cards={list.cards} />
          ))}
          <AddList onAddList={(title) => setData([...data, { title, cards: [] }])} />
        </DragDropContext>
      </div>
    </main>
  )
}
