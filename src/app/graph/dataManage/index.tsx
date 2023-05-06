import styles from './index.module.css'
import { Button, Upload } from 'antd'
import type { UploadChangeParam } from 'antd/lib/upload'

export default function DataManage() {
  const handleChange = (param: UploadChangeParam) => {
    const { file, fileList } = param
    console.log(file, fileList)
    const fileReader = new FileReader()
    fileReader.onload = (e) => {
      const result = e.target?.result
      console.log(result)
    }
    // fileReader.readAsBinaryString(file)
  }

  return (
    <div className={styles.container}>
      <Upload
        accept=".json,.csv"
        onChange={handleChange}
        beforeUpload={() => false}
      >
        <Button type="primary">打开文件</Button>
      </Upload>
    </div>
  )
}
