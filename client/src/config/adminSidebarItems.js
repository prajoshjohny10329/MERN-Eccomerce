import { Boxes, ChartArea } from 'lucide-react'

export const adminSidebarItems = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        path: '/admin/dashboard',
        icon: <ChartArea />
    },
    {
        id: 'products',
        label: 'Products',
        path: '/admin/products',
        icon: <ChartArea />
    },
    {
        id: 'orders',
        label: 'Orders',
        path: '/admin/dashboard',
        icon: <Boxes />
    }
  ]