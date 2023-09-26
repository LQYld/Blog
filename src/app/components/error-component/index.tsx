// @ts-nocheck
import React from 'react'
import { Empty } from '@douyinfe/semi-ui'
import {
  IllustrationConstruction,
  IllustrationConstructionDark
} from '@douyinfe/semi-illustrations'
import './index.css'

const ErrorComponent = () => {
  return (
    <div className="w-full h-full flex justify-center items-center error-body">
      <Empty
        image={<IllustrationConstruction style={{ width: 150, height: 150 }} />}
        darkModeImage={
          <IllustrationConstructionDark style={{ width: 150, height: 150 }} />
        }
        title={'Functional construction in progress'}
        description="The current function is not yet open, please stay tuned ."
      />
    </div>
  )
}

export default ErrorComponent
