import Header from '@/components/header'
import List from '@/components/list'

import mockData from '@/services/mock'

export default function Home() {
  return (
    <main className=''>
      <Header />
      <div className='bg-blue-500 min-h-screen p-6 flex gap-4 overflow-x-auto'>
        {mockData.map((list) => (
          <List key={list.title} title={list.title} cards={list.cards} />
        ))}
      </div>
    </main>
  )
}
