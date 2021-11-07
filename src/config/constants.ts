import { ReactComponent as CoinbaseSVG } from 'assets/svgs/wallet/coinbase.svg';
import { ReactComponent as FormaticSVG } from 'assets/svgs/wallet/fortmatic.svg';
import { ReactComponent as MetaMaskSVG } from 'assets/svgs/wallet/metamask-color.svg';
import { ReactComponent as PortisSVG } from 'assets/svgs/wallet/portis.svg';
import { ReactComponent as WalletConnectSVG } from 'assets/svgs/wallet/wallet-connect.svg';
import { ConnectorNames } from 'utils/enums';

export const LOGGER_ID = 'flama';

export const INFURA_PROJECT_ID = process.env.REACT_APP_INFURA_PROJECT_ID;

export const TOKEN_PRICE_DECIMALS = 18;
export const WEIGHT_DECIMALS = 18;

export const MAX_NAME_LENGTH = 20;
export const MAX_BIO_LENGTH = 560;

export const USER_ROLE_ADMIN = 1;
export const USER_ROLE_COORDINAPE = 2;

export const WALLET_ICONS: { [key in ConnectorNames]: React.ElementType } = {
  [ConnectorNames.Injected]: MetaMaskSVG,
  [ConnectorNames.WalletConnect]: WalletConnectSVG,
  [ConnectorNames.WalletLink]: CoinbaseSVG,
  [ConnectorNames.Fortmatic]: FormaticSVG,
  [ConnectorNames.Portis]: PortisSVG,
};

export const SKILLS = [
  'Community Mgmt',
  'Discord',
  'Social Media',
  'Governance',
  'Budget Mgmt',
  'Compensation',
  'Grants',
  'Solidity',
  'Web3',
  'Front End',
  'Back End',
  'UX',
  'UI',
  'Product Design',
  'Full-Stack',
  'Dev Ops',
  'Project Mgmt',
  'Security',
  'Memes',
  'Art',
  'NFTs',
  'Graphics',
  'Branding',
  '3D',
  'Video',
  'Communications',
  'Translation',
  'Docs',
  'Writing',
  'Podcasting',
  'Strategy',
  'Treasury Mgmt',
  'Contract Audits',
  'Multisig',
];
