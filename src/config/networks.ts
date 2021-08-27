import { ChainId } from '@sushiswap/sdk'

const Bsc = '/images/networks/bsc-network.jpg'
const Goerli = '/images/networks/goerli-network.jpg'
const Kovan = '/images/networks/kovan-network.jpg'
const Mainnet = '/images/networks/mainnet-network.jpg'
const Matic = '/images/networks/matic-network.jpg'
const Polygon = '/images/networks/polygon-network.jpg'
const Rinkeby = '/images/networks/rinkeby-network.jpg'
const Ropsten = '/images/networks/ropsten-network.jpg'

export const NETWORK_ICON = {
  [ChainId.MAINNET]: Mainnet,
  [ChainId.ROPSTEN]: Ropsten,
  [ChainId.RINKEBY]: Rinkeby,
  [ChainId.GÖRLI]: Goerli,
  [ChainId.KOVAN]: Kovan,
  [ChainId.BSC]: Bsc,
  [ChainId.BSC_TESTNET]: Bsc,
  [ChainId.MATIC]: Polygon,
  [ChainId.MATIC_TESTNET]: Matic,
 
}

export const NETWORK_LABEL: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.MATIC]: 'Polygon (Matic)',
  [ChainId.MATIC_TESTNET]: 'Matic Testnet',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSC_TESTNET]: 'BSC Testnet',
 
}
