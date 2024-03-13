import { Button, Table, Form, Input, message } from 'antd'
import LayoutWrapper from '../../layout'
import { useCallback, useEffect } from 'react'
import { IFnType } from './type'
import MOCK_DATA from './mockData'
import { tableFields } from './fields'

const { Item } = Form

export default function Questions() {
  const [form] = Form.useForm()

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
      case 'remove': {
        // TODO request Backend API For Real action
        message.info('Remove From Favorite List successfully!!')
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
                render() {
                  return (
                    <>
                      <Button
                        onClick={btnHandler.bind(null, 'remove')}
                        danger
                        style={{ marginLeft: 10 }}
                      >
                        Remove
                      </Button>
                    </>
                  )
                },
              },
            ])}
          ></Table>
        </>
      </LayoutWrapper>
    </>
  )
}
