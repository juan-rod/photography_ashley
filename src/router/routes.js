import Home from '@/pages/Home/HomePage'
import Blog from '@/pages/Blog/BlogPage'
import PhotoGrid from '@/components/PhotoGrid'
import AdminDash from '@/pages/Admin/AdminDash'
import AdminLogin from '@/pages/Admin/AdminLogin'

export const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {path: '', name: 'PhotoGrid', component: PhotoGrid}
    ]
  },
  {
    path: '/admin',
    name: 'Admin-Dash',
    component: AdminDash,
    meta: { auth: true }
  },
  {
    path: '/admin-login',
    name: 'Admin-Login',
    component: AdminLogin
  },
  { path: '/blog', name: 'BlogPage', component: Blog }
]
