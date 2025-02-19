import { BigNumber } from 'ethers';

export type Maybe<T> = T | null;

export type NetworkId = 1;
export type KnownToken = 'fma' | 'fss' | 'flap';

export type KnownContract = 'stake';

export interface INetwork {
  label: string;
  url: string;
  contracts: {
    [key in KnownContract]: string;
  };
}

export interface IKnownTokenData {
  symbol: string;
  decimals: number;
  image: string;
  addresses: {
    [K in NetworkId]?: string;
  };
}

export interface IToken {
  address: string;
  decimals: number;
  symbol: string;
  image: string;
}

declare global {
  interface ObjectConstructor {
    typedKeys<T>(obj: T): Array<keyof T>;
  }
}

export interface ITableColumn {
  label: string;
  accessor?: string;
  render?: (obj: GenericObject) => React.ReactNode;
  sortFunc?: (a: any, b: any) => number;
  noSort?: boolean;
  wide?: boolean;
  narrow?: boolean;
  leftAlign?: boolean;
}

export type TUpdateGift = ({
  note,
  tokens,
}: {
  note?: string;
  tokens?: number;
}) => void;
