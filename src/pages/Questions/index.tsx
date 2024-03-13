import { Button, Table, Form, Input, message } from 'antd'
import LayoutWrapper from '../../layout'
import { tableFields } from './fields'
import MOCK_DATA from './mockData'
import { useCallback, useEffect, useState } from 'react'
import DetailModal from './DetailModal'
import { DataItem, IFnType } from './type'

const { Item } = Form

export default function Questions() {
  const [form] = Form.useForm()

  const [showDetailModal, setShowDetailModal] = useState(false)
  const [curItem, setCurItem] = useState<DataItem>()

  useEffect(() => {
    // TODO could request for real Data here
  }, [])

  const btnHandler = useCallback((fnType: IFnType) => {
    switch (fnType) {
      case 'search': {
        // const searchValues = form.getFieldsValue()
        // TODO Search Table from Backend
        break
      }

      case 'reset': {
        form.resetFields()
        break
      }

      case 'detail': {
        setShowDetailModal(true)
        break
      }
      case 'favor': {
        // TODO request Backend API For Real action
        message.info('Mark as Favorite successfully!!')
        break
      }
    }
  }, [])

  return (
    <>
      <LayoutWrapper>
        <>
          <div style={{ marginBottom: 22 }}>
            <Form form={form} layout="inline">
              <Item label={'Type'} name={'type'}>
                <Input></Input>
              </Item>
              <Item label={'Difficulty'} name={'difficulty'}>
                <Input></Input>
              </Item>
              <Button type="primary" onClick={btnHandler.bind(null, 'search')}>
                Search
              </Button>
              <Button style={{ marginLeft: 12 }} onClick={btnHandler.bind(null, 'reset')}>
                Reset
              </Button>
            </Form>
          </div>
          <Table
            dataSource={MOCK_DATA}
            columns={tableFields.concat([
              {
                title: 'Operations',
                key: 'Operations',
                render(_, record) {
                  return (
                    <>
                      <Button
                        onClick={() => {
                          setCurItem(record as DataItem)
                          btnHandler('detail')
                        }}
                      >
                        Detail
                      </Button>
                      <Button
                        onClick={btnHandler.bind(null, 'favor')}
                        type="primary"
                        style={{ marginLeft: 10 }}
                      >
                        Mark as Favorite
                      </Button>
                    </>
                  )
                },
              },
            ])}
          ></Table>
        </>
      </LayoutWrapper>
      <DetailModal
        open={showDetailModal}
        data={curItem}
        onCancel={() => setShowDetailModal(false)}
      ></DetailModal>
    </>
  )
}
