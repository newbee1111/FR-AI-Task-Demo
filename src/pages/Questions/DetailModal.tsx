import { Descriptions, Modal } from 'antd'
import DescriptionsItem from 'antd/es/descriptions/Item'
import { DataItem } from './type'

export interface IDetailModalType {
  data?: DataItem
  open: boolean
  onCancel: () => void
}

export default function DetailModal(props: IDetailModalType) {
  const { open, data, onCancel } = props
  return (
    <Modal open={open} onCancel={onCancel} title={'View Details'} width={'50%'}>
      <Descriptions column={1}>
        <DescriptionsItem label={'id'}>{data?.id}</DescriptionsItem>
        <DescriptionsItem label={'name'}>{data?.name}</DescriptionsItem>
        <DescriptionsItem label={'detail'}>{data?.detail}</DescriptionsItem>
      </Descriptions>
    </Modal>
  )
}
