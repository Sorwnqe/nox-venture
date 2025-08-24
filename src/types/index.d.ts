declare interface Window {
  okxwallet?: {
    /**
     * [Okx Wallet Bitcoin Docs](https://www.okx.com/cn/web3/build/docs/sdks/chains/bitcoin/provider)
     */
    bitcoin: {
      connect: () => Promise<{ address: string; publicKey: string }>;
      getAccounts: () => Promise<string[]>;
      requestAccounts: () => Promise<string[]>;
      signMessage: (signStr: string, type?: 'ecdsa' | 'bip322-simple') => Promise<string>;
      getPublicKey: () => Promise<string>;
      pushTx: (rawTx: string) => Promise<string>;
      signPsbt: (
        psbtHex: string,
        options?: {
          authFinalized: boolean;
          toSignInputs: {
            index: number;
            address: string;
            publicKey: string;
            sighashTypes?: number[];
            disableTweakSigner?: boolean;
          }[];
        }
      ) => Promise<string>;
    };
    bitcoinTestnet: {
      connect: () => Promise<{ address: string; publicKey: string }>;
      signMessage: (signStr: string, type?: 'ecdsa' | 'bip322-simple') => Promise<string>;
      signPsbt: (
        psbtHex: string,
        options?: {
          authFinalized: boolean;
          toSignInputs: {
            index: number;
            address: string;
            publicKey: string;
            sighashTypes?: number[];
            disableTweakSigner?: boolean;
          }[];
        }
      ) => Promise<string>;
    };
  };
  unisat?: {
    requestAccounts: () => Promise<string[]>;
    getAccounts: () => Promise<string[]>;
    getPublicKey: () => Promise<string[]>;
    getNetwork: () => Promise<'livenet' | 'testnet'>;
    switchNetwork: (network: 'livenet' | 'testnet') => Promise<void>;
    pushTx: (rawtx: string) => Promise<string>;
    signPsbt: (
      psbtHex: string,
      options?: {
        autoFinalized: boolean;
        toSignInputs: {
          index: number;
          address: string;
          publicKey: string;
          sighashTypes: number[];
          disableTweakSigner: boolean;
        }[];
      }
    ) => Promise<string>;
  };
}
