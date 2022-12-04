/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useMediaQuery } from 'react-responsive'
import { useContractRead, useContractWrite } from 'wagmi'
import ans_abis from './abis/ans_abis.json'

const useANSWrite = (chainId: number, functionName: string, args: any[], overrides?: { from?: string, value: string }) => {
  const nets: Record<string, string> = ans_abis.ans.networks
  return useContractWrite({
    mode: 'recklesslyUnprepared',
    address: nets[`${chainId}`],
    abi: ans_abis.ans.abi,
    functionName,
    args,
    chainId,
    overrides
  })
}

const useANS1155Write = (chainId: number, functionName: string, args: any[], mode: 'recklesslyUnprepared',) => {
  const nets: Record<string, string> = ans_abis.a1155.networks
  return useContractWrite({
    mode: 'recklesslyUnprepared',
    address: nets[`${chainId}`],
    abi: ans_abis.a1155.abi,
    functionName,
    args,
    chainId,
    overrides
  })
}

const useANSRead = (chainId: number, functionName: string, args: any[]) => {
  const nets: Record<string, string> = ans_abis.ans.networks
  return useContractRead({
    address: nets[`${chainId}`],
    abi: ans_abis.ans.abi,
    functionName,
    args,
    chainId
  })
}

const useANS1155Read = (chainId: number, functionName: string, args: any[]) => {
  const nets: Record<string, string> = ans_abis.a1155.networks
  return useContractRead({
    address: nets[`${chainId}`],
    abi: ans_abis.a1155.abi,
    functionName,
    args,
    chainId
  })
}

const useIsMobile = () => {
  return useMediaQuery({ maxWidth: 767 })
}

export { useANS1155Read, useANS1155Write, useANSRead, useANSWrite, useIsMobile }