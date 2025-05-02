'use client'

import React, { useState } from 'react'
import { AppButton } from '@/src/components/henaket/AppButton'
import { AppIcon } from '@/src/components/henaket/AppIcon'
import { AppInput } from '@/src/components/henaket/AppInput'
import { AppLabel } from '@/src/components/henaket/AppLabel'
import { AppAlert } from '@/src/components/henaket/AppAlert'
import { AppAccordion } from '@/src/components/henaket/Accordion'
import { AppAccordionGroup } from '@/src/components/henaket/AppAccordionGroup'
import RefreshIcon from '@mui/icons-material/Refresh'
import { Col, Row, Segmented, Space } from 'antd'

const accordionItems = [
  {
    key: '1',
    title: 'Authentication Service',
    content:
      'Provides OAuth2-based login and token issuing for government systems.'
  },
  {
    key: '2',
    title: 'Person Registry API',
    content:
      'Access to core population records, including CPR and civil registration data.'
  },
  {
    key: '3',
    title: 'Document Delivery',
    content:
      'Enables secure PDF and XML file transfers between registered public services.'
  },
  {
    key: '4',
    title: 'Health Information Exchange',
    content:
      'Federated access to national lab results, prescriptions, and care episodes.'
  },
  {
    key: '5',
    title: 'Legal Entity Search',
    content:
      'Find business registration data, legal representatives, and address history.'
  }
]

const AntdKit: React.FC = () => {
  const [view, setView] = useState<string>('Buttons')

  return (
    <div className="py-20  mx-auto px-4 w-viewport-standard">
      <Segmented
        block
        options={[
          'Buttons',
          'Icons',
          'Inputs',
          'Labels',
          'Alerts',
          'Accordions'
        ]}
        value={view}
        onChange={val => setView(val as string)}
        className="mb-10 min-w-[1200px] "
      />

      {view === 'Buttons' && (
        <Row gutter={[40, 40]}>
          <Col xs={24}>
            <Space className={'mb-10'}>
              <AppButton color={'primary'} variant={'solid'} size={'small'}>
                Primary small
              </AppButton>
              <AppButton color={'primary'} variant={'solid'}>
                Primary
              </AppButton>
              <AppButton color={'primary'} variant={'solid'} size={'large'}>
                Primary large
              </AppButton>
              <AppButton color={'primary'} variant={'solid'} disabled>
                Disabled
              </AppButton>
              <AppButton color={'primary'} variant={'solid'} loading={true}>
                Loading
              </AppButton>
              <AppButton
                color={'primary'}
                variant={'solid'}
                icon={<RefreshIcon />}
              >
                Icon at start
              </AppButton>
              <AppButton
                color={'primary'}
                variant={'solid'}
                icon={<RefreshIcon />}
                iconPosition={'end'}
              >
                Icon at end
              </AppButton>
              <AppButton
                color={'primary'}
                variant={'solid'}
                icon={<RefreshIcon />}
                iconPosition={'end'}
                disabled={true}
              >
                Icon disabled
              </AppButton>
            </Space>
          </Col>
          <Col xs={24}>
            <Space className={'mb-10'}>
              <AppButton color={'default'} variant={'text'} size={'small'}>
                Text small
              </AppButton>
              <AppButton color={'default'} variant={'text'}>
                Text
              </AppButton>
              <AppButton color={'default'} variant={'text'} size={'large'}>
                Text large
              </AppButton>
              <AppButton color={'default'} variant={'text'} disabled>
                Disabled
              </AppButton>
              <AppButton color={'default'} variant={'text'} loading={true}>
                Loading
              </AppButton>
              <AppButton
                color={'default'}
                variant={'text'}
                icon={<RefreshIcon />}
              >
                Icon at start
              </AppButton>
              <AppButton
                color={'default'}
                variant={'text'}
                icon={<RefreshIcon />}
                iconPosition={'end'}
              >
                Icon at end
              </AppButton>
              <AppButton
                color={'default'}
                variant={'text'}
                icon={<RefreshIcon />}
                iconPosition={'end'}
                disabled={true}
              >
                Icon disabled
              </AppButton>
            </Space>
          </Col>
          <Col>
            <Space className={'mb-10'}>
              <AppButton color={'primary'} variant={'outlined'} size={'small'}>
                Outlined small
              </AppButton>
              <AppButton color={'primary'} variant={'outlined'}>
                Outlined
              </AppButton>
              <AppButton color={'primary'} variant={'outlined'} size={'large'}>
                Outlined large
              </AppButton>
              <AppButton color={'primary'} variant={'outlined'} disabled>
                Disabled
              </AppButton>
              <AppButton color={'primary'} variant={'outlined'} loading={true}>
                Loading
              </AppButton>
              <AppButton
                color={'primary'}
                variant={'outlined'}
                icon={<RefreshIcon />}
              >
                Icon at start
              </AppButton>
              <AppButton
                color={'primary'}
                variant={'outlined'}
                icon={<RefreshIcon />}
                iconPosition={'end'}
              >
                Icon at end
              </AppButton>
            </Space>
          </Col>
          <Col xs={24}>
            <Space className={'mb-10'}>
              <AppButton color={'green'} variant={'solid'} size={'small'}>
                Primary small
              </AppButton>
              <AppButton color={'green'} variant={'solid'}>
                Primary
              </AppButton>
              <AppButton color={'green'} variant={'solid'} size={'large'}>
                Primary large
              </AppButton>
              <AppButton color={'green'} variant={'solid'} disabled>
                Disabled
              </AppButton>
              <AppButton color={'green'} variant={'solid'} loading={true}>
                Loading
              </AppButton>
              <AppButton
                color={'green'}
                variant={'solid'}
                icon={<RefreshIcon />}
              >
                Icon at start
              </AppButton>
              <AppButton
                color={'green'}
                variant={'solid'}
                icon={<RefreshIcon />}
                iconPosition={'end'}
              >
                Icon at end
              </AppButton>
              <AppButton
                color={'green'}
                variant={'solid'}
                icon={<RefreshIcon />}
                iconPosition={'end'}
                disabled={true}
              >
                Icon disabled
              </AppButton>
            </Space>
          </Col>
        </Row>
      )}

      <Row>
        {view === 'Icons' && (
          <Col xs={24}>
            <AppIcon icon="check_circle" size="24px" />
          </Col>
        )}

        {view === 'Inputs' && (
          <Col xs={24}>
            <AppInput value="input" onChange={() => {}} />
          </Col>
        )}

        {view === 'Labels' && (
          <Col xs={24}>
            <Space wrap>
              <AppLabel backgroundColor="#000" textColor="#fff">
                BIG NEWS
              </AppLabel>
              <AppLabel backgroundColor="#000" textColor="#fff" compact>
                LITTLE NEWS
              </AppLabel>
              <AppLabel backgroundColor="#1D39C4" textColor="#fff">
                COMPLETED
              </AppLabel>
              <AppLabel backgroundColor="#F0F5FF" textColor="#2F54EB">
                IN PROGRESS
              </AppLabel>
              <AppLabel backgroundColor="#F5F5F5" textColor="#595959">
                NOT STARTED YET
              </AppLabel>
              <AppLabel
                backgroundColor="#fff"
                textColor="#000"
                borderColor="#BFBFBF"
              >
                CANNOT STARTED YET
              </AppLabel>
            </Space>
          </Col>
        )}

        {view === 'Alerts' && (
          <Col xs={24}>
            <Space direction="vertical" size={24} className="w-full">
              <AppAlert
                message="Success Tips"
                description="Detailed description and advice about successful copywriting."
                type="success"
                showIcon
              />
              <AppAlert
                message="Informational Notes"
                description="Additional description and information about copywriting."
                type="info"
                showIcon
                className={'w-[250px]'}
              />
              <AppAlert
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
                showIcon
                closable
              />
              <AppAlert
                message="Error"
                description="This is an error message about copywriting."
                type="error"
                showIcon
              />
            </Space>

            <Space direction="vertical" size={24} className="w-full">
              <AppAlert
                message="Success Tips"
                description="Detailed description and advice about successful copywriting."
                type="success"
                showIcon
                banner
              />
              <AppAlert
                message="Informational Notes"
                description="Additional description and information about copywriting."
                type="info"
                showIcon
                banner
              />
              <AppAlert
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
                showIcon
                closable
                banner
              />
              <AppAlert
                message="Error"
                description="This is an error message about copywriting."
                type="error"
                showIcon
                banner
              />
            </Space>
          </Col>
        )}

        {view === 'Accordions' && (
          <>
            <Col xs={24}>
              <AppAccordion
                title="What is Henaket Design System?"
                content="<p>Henaket is a modular, accessible, and composable design system built on React, TailwindCSS, and Ant Design. It promotes consistency and usability across applications.</p>"
              />
            </Col>
            <Col xs={24}>
              <AppAccordion
                title="Civil Registry API"
                content="<p>This API provides access to official civil records, including birth and death registration details, identity codes, and legal statuses.</p>"
                expanded
                serviceTypeBadge={{
                  name: 'Identity Services',
                  background_color: '#E0F7FA',
                  text_color: '#006064'
                }}
              />
            </Col>
            <Col xs={24}>
              <AppAccordion
                title="National Health Record Integration"
                content="<p>This integration enables automatic synchronization of lab results, immunizations, and chronic disease data across providers.</p>"
                actionButtonLink={{
                  href: '/services/ehr',
                  display_text: 'Open EHR'
                }}
                actionButtonIcon="open_in_new"
              />
            </Col>
            <Col xs={24}>
              <AppAccordionGroup
                items={accordionItems}
                defaultActiveKey={['1']}
                accordion
              />
            </Col>
          </>
        )}
      </Row>
    </div>
  )
}

export default AntdKit
