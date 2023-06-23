import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function ConnectBtn() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        if (connected) {
          return null; // Return nothing when connected
        }
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            <button className="main-btn" style={{width : '100%', justifyContent : "center"}} onClick={openConnectModal} type="button">
              Connect Wallet
            </button>
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
