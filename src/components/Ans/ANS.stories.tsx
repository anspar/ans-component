import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeSwitch } from '@anspar/anspar-theme'
import { WalletContext, Wallet } from '@anspar/rainbowkit-anspar'
import { HosqPicker } from '@anspar/hosq'
import { ANS } from './ANS'


export default {
  title: 'ANS',
  component: ANS
} as ComponentMeta<typeof ANS>

const Template: ComponentStory<typeof ANS> = (args) => {
  return (
    <>
      <ThemeSwitch style={{ width: '30px' }} />
      <WalletContext testnets>
        <Wallet />
        <div style={{ marginTop: '0.5rem', backgroundColor: 'var(--as-light)', padding: '1rem' }}>
          <ANS href='https://anspar.io' />
        </div>
        <HosqPicker />
      </WalletContext>
    </>
  )
}

export const Default = Template.bind({})
