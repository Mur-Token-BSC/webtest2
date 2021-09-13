import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
     {
        label: t('Exchange'),
        icon: 'TradeIcon',
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        icon: 'HomeIcon',
        href: '/liquidity',
      },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
]

export default config
