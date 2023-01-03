import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeSwitch } from '@anspar/anspar-theme'
import { WalletContext, Wallet } from '@anspar/rainbowkit-anspar'
import { HosqPicker } from '@anspar/hosq'
import { ANS } from './ANS'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'ANS',
  component: ANS
} as ComponentMeta<typeof ANS>

const Template: ComponentStory<typeof ANS> = (args) => {
  return (
    <div style={{ backgroundColor: 'var(--as-common)', padding: '1rem' }}>
      <ThemeSwitch style={{ width: '30px' }} />
      <WalletContext testnets>
        <Wallet />
        <div style={{ marginTop: '0.5rem', padding: '1rem' }}>
          <ANS {...args} />
        </div>
        <HosqPicker />
      </WalletContext>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  href: 'https://anspar.io'
}

const Template2: ComponentStory<typeof ANS> = (args) => {
  return (
    <div style={{ backgroundColor: 'var(--as-common)', padding: '1rem' }}>
      <ThemeSwitch style={{ width: '30px' }} />
      <WalletContext testnets customTestChains={[{
        id: 1337,
        name: 'Anspar',
        network: 'Anspar',
        nativeCurrency: {
          decimals: 18,
          name: 'Anspar',
          symbol: 'AT'
        },
        rpcUrls: {
          default: { http: ['http://server:8545'] }
        }
      }]
      }>
        <div style={{ margin: '0.5rem 0', display: 'flex' }}>
          <ANS {...args} />
          <Wallet />
        </div>

        <HosqPicker />
      </WalletContext>
    </div>
  )
}
export const ANSCustomChain = Template2.bind({})
