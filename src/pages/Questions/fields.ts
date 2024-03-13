import { AnyObject } from 'antd/es/_util/type'
import { ColumnsType } from 'antd/es/table'

export const tableFields: ColumnsType<AnyObject> = [
  {
    dataIndex: 'id',
    title: 'ID',
  },
  {
    dataIndex: 'name',
    title: 'Name',
  },
  {
    dataIndex: 'type',
    title: 'Type',
  },
  {
    dataIndex: 'difficulty',
    title: 'Difficulty',
  },
]
