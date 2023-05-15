// import styles from './index.module.css'
import { Button, Upload, Table, Divider } from 'antd'
import type { UploadChangeParam } from 'antd/lib/upload'
import { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { fieldsAtom } from '@/store/graph'

export default function DataManage() {
  const [list, setList] = useState([])
  const [fields, setFields] = useAtom(fieldsAtom)

  useEffect(() => {
    const columns = list[0]
      ? Object.keys(list[0]).map((key) => {
          return {
            key,
            name: key,
            type: 'dimension',
          }
        })
      : []
    setFields(columns)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list])

  const handleChange = (param: UploadChangeParam) => {
    const { file } = param
    const { type } = file
    const fileReader = new FileReader()
    fileReader.onload = (e) => {
      const result = e.target?.result
      if (type === 'application/json') {
        setList(JSON.parse(result as string))
      }
    }
    fileReader.readAsBinaryString(file as any)
  }

  const beforeUpload = () => {
    return false
  }

  return (
    <main>
      <Upload
        accept=".json,.csv"
        onChange={handleChange}
        beforeUpload={beforeUpload}
        showUploadList={false}
      >
        <Button type="primary">打开文件</Button>
      </Upload>
      <Divider />
      <Table
        dataSource={list}
        pagination={{
          pageSize: 10,
        }}
        columns={fields.map((field) => {
          return {
            title: field.name,
            dataIndex: field.key,
            key: field.key,
          }
        })}
      />
    </main>
  )
}
