import React from 'react'
import ansStyles from './ANS.modules.css'
import { useAccount, useNetwork } from 'wagmi'

import { getGateway, useGet } from '@anspar/hosq'
import { useANSRead, useIsMobile } from '../utils/hooks'
import userIconPh from '../../imgs/circle-user-solid.png'
import { Result } from 'ethers/lib/utils'

export interface ANSConnectorProps {
  address: string
}

let selectedANS: Result | undefined

function ANSElem({ data, href }: { data: Result | undefined, href: string | undefined }): JSX.Element {
  const defANS = (data != null) ? data[0] : ''
  const details = useGet(`${data && data[1]}/info.json`, true)
  // useEffect(() => {
  //   if (data === undefined) return
  // }, [data])

  return (
    <a href={href} className={[ansStyles.ans_wallet, 'as-bg-light as-btn ' + `${details.isLoading ? 'as-loading' : ''}`].join(' ')}>
      <img src={details.data ? `${getGateway()}/${data && data[1]}/${details.data.image}` : userIconPh} alt="ANS User Image" className={ansStyles.icon}
        onError={(e) => { e.currentTarget.src = userIconPh }} />
      {
        useIsMobile() ?
          <span className="as-text-dark as-text-bold" style={{ marginLeft: '0.25rem' }}>
            {defANS.length > 10 ? `${defANS.substring(0, 7)}...` : defANS}
          </span>
          :
          <></>
      }
    </a>
  )
}

export function getSelectedANS(): Result | undefined {
  return selectedANS
}

export function ANS({ href }: { href?: string}): JSX.Element {
  const { address } = useAccount()
  // const [ansData, setAnsData] = useState<Result | undefined>()
  const { chain } = useNetwork()
  const { data, isError } = useANSRead(chain?.id as number, 'get_default', [address])
  isError && console.error(`Failed to get Default ANS for ${address}`)
  if (data !== null || data !== undefined) {
    // console.log(data);
    selectedANS = data
    // setAnsData(data)
  }

  return (
    <ANSElem data={data} href={href}/>
  )
}
