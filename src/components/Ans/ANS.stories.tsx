import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeSwitch } from '@anspar/anspar-theme'
import { WalletContext, Wallet } from '@anspar/rainbowkit-anspar'
import { HosqPicker, useHosqRead } from '@anspar/hosq'
import { ANS } from './ANS'
import { useAccount, useNetwork } from 'wagmi'

export default {
  title: 'ANS',
  component: ANS
} as ComponentMeta<typeof ANS>

const Template: ComponentStory<typeof ANS> = (args) => {
  // const { isConnected } = useAccount()
  // const { chain } = useNetwork()
  // console.log(chain)
  // const { data, isError, isLoading } = useHosqRead(chain?.id as number, 'get_provider_details', [1])
  return (
    <>
      <ThemeSwitch style={{ width: '30px' }} />
      <WalletContext testnets>
        <Wallet />
        <div style={{ marginTop: '0.5rem', padding: '1rem' }}>
          <ANS href='https://anspar.io' />
        </div>
        <HosqPicker />
      </WalletContext>
    </>
  )
}

export const Default = Template.bind({})

const Template2: ComponentStory<typeof ANS> = (args) => {
  return (
    <>
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
        <Wallet />
        <div style={{ margin: '0.5rem 0', padding: '1rem' }}>
          <ANS />
        </div>

        {args.href === 's' && <HosqPicker />}
      </WalletContext>
    </>
  )
}
export const ANSCustomChain = Template2.bind({})
