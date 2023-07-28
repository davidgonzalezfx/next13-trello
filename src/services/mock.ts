import { List } from '@/types'

const data: List[] = [
  {
    title: 'To Do',
    cards: [
      {
        title: 'Learn React',
        labels: ['label', 'label'],
        avatar:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
      },
      {
        title: 'Learn Vue',
        labels: ['label', 'label'],
        avatar:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
      }
    ]
  },
  {
    title: 'In Progress',
    cards: [
      {
        title: 'Building with Tailwind',
        labels: ['label', 'label'],
        avatar:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
      }
    ]
  },
  {
    title: 'Done',
    cards: [
      {
        title: 'Completed JavaScript Course',
        labels: ['label', 'label'],
        avatar:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
      }
    ]
  }
]

export default data
