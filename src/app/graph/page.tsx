'use client'

import styles from './page.module.css'
import { Tabs } from 'antd'
import DataManage from './dataManage'

export default function Graph() {
  const tabs = [
    {
      key: 'dataManage',
      label: '数据管理',
      children: <DataManage />,
    },
    {
      key: 'graph',
      label: '自定义分析',
      children: '自定义分析',
    },
  ]
  return (
    <main className={styles.main}>
      <Tabs items={tabs} />
    </main>
  )
}
