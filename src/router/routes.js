import Home from '@/pages/Home/HomePage'
import Blog from '@/pages/Blog/BlogPage'
import PhotoGrid from '@/components/PhotoGrid.vue'

export const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {path: '', name: 'PhotoGrid', component: PhotoGrid}
    ]
  },
  { path: '/blog', name: 'BlogPage', component: Blog }
]
