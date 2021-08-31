import { AXSUSHI, SUSHI } from '../../../config/tokens'
import { ChainId, SUSHI_ADDRESS } from '@sushiswap/sdk'
import { StrategyGeneralInfo, StrategyHook, StrategyTokenDefinitions } from '../types'
import { useEffect, useMemo } from 'react'

import { I18n } from '@lingui/core'
import { t } from '@lingui/macro'
import { useActiveWeb3React } from '../../../hooks'
import useBaseStrategy from './useBaseStrategy'
import { useLingui } from '@lingui/react'
import { useTokenBalances } from '../../wallet/hooks'

export const GENERAL = (i18n: I18n): StrategyGeneralInfo => ({
  name: i18n._(t`BGSP → Aave`),
  steps: [i18n._(t`BGSP`), i18n._(t`xBGSP`), i18n._(t`Aave`)],
  zapMethod: 'stakeSushiToAave',
  unzapMethod: 'unstakeSushiFromAave',
  description: i18n._(
    t`Stake BGSP for xBGSP and deposit into Aave in one click. xBGSP in Aave (aXBGSP) can be lent or used as collateral for borrowing.`
  ),
  inputSymbol: i18n._(t`BGSP`),
  outputSymbol: i18n._(t`xBGSP in Aave`),
})

export const tokenDefinitions: StrategyTokenDefinitions = {
  inputToken: {
    chainId: ChainId.MAINNET,
    address: SUSHI_ADDRESS[ChainId.MAINNET],
    decimals: 18,
    symbol: 'SUSHI',
  },
  outputToken: {
    chainId: ChainId.MAINNET,
    address: '0xf256cc7847e919fac9b808cc216cac87ccf2f47a',
    decimals: 18,
    symbol: 'aXSUSHI',
  },
}

const useStakeSushiToAaveStrategy = (): StrategyHook => {
  const { i18n } = useLingui()
  const { account } = useActiveWeb3React()
  const balances = useTokenBalances(account, [SUSHI[ChainId.MAINNET], AXSUSHI])
  const general = useMemo(() => GENERAL(i18n), [i18n])
  const { setBalances, ...strategy } = useBaseStrategy({
    id: 'stakeSushiToAaveStrategy',
    general,
    tokenDefinitions,
  })

  useEffect(() => {
    if (!balances) return

    setBalances({
      inputTokenBalance: balances[SUSHI[ChainId.MAINNET].address],
      outputTokenBalance: balances[AXSUSHI.address],
    })
  }, [balances, setBalances])

  return useMemo(
    () => ({
      ...strategy,
      setBalances,
    }),
    [strategy, setBalances]
  )
}

export default useStakeSushiToAaveStrategy
