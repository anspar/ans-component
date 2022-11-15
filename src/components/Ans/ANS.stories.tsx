import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ANS } from './ANS';
import { HosqProvider } from '@anspar/hosq';

import { ThemeSwitch } from '@anspar/anspar-theme';

import { WalletContext, Wallet } from '@anspar/rainbowkit-anspar';

export default {
  title: 'ANS',
  component: ANS,
} as ComponentMeta<typeof ANS>;

const Template: ComponentStory<typeof ANS> = (args) => {
  return (
    <>
      <ThemeSwitch style={{ width: "30px" }} />
      <WalletContext testnets>
        <Wallet />
        <div style={{ marginTop: "0.5rem", backgroundColor: "var(--as-light)", padding: "1rem" }}>
          <HosqProvider>
            <ANS href='https://anspar.io' />
          </HosqProvider>
        </div>
      </WalletContext>
    </>
  )
}


export const Default = Template.bind({});