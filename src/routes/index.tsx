import { createBrowserRouter } from 'react-router-dom'
import Questions from '../pages/Questions'
import Favorites from '../pages/Favorites'

const router = createBrowserRouter([
  {
    path: '/question',
    element: <Questions />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
  {
    path: '/',
    element: <Questions />,
  },
])

export default router
