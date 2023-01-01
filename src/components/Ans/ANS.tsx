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

function ANSElem({ data }: { data: Result | undefined }): JSX.Element {
  const defANS = (data != null) ? data[0] : ''
  const cid_path = `${data[1] !== undefined && data[1]}/info.json`
  const details = useGet(cid_path, true)
  // useEffect(() => {
  //   if (data === undefined) return
  // }, [data])
  return (
    <>
      <img src={`${getGateway()}/${data[1]}/${details?.data?.image}`} alt="ANS User Image" className={ansStyles.icon}
        onError={(e) => { e.currentTarget.src = userIconPh }} />

      {
        !useIsMobile() ?
          <span className={`as-text-dark as-text-bold ${details.isLoading ? 'as-loading' : ''}`} style={{ marginLeft: '0.25rem' }}>
            {defANS.length > 10 ? `${defANS.substring(0, 7)}...` : defANS}
          </span>
          :
          <></>
      }
    </>
  )
}

export function getSelectedANS(): Result | undefined {
  return selectedANS
}

export function ANS({ href }: { href?: string }): JSX.Element {
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
    <a href={href} className={[ansStyles.ans_wallet, 'as-bg-light as-btn'].join(' ')}>
      {
        data && data[1] ?
          <ANSElem data={data} />
          :
          <>
            <img src={userIconPh} alt="ANS User Image" className={ansStyles.icon} />
          </>
      }
    </a>
  )
}
