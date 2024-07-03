
'use client';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

const WalletConnectButton = () => {
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();
    const { address, isConnected } = useAccount();
    const metaMaskConnector = connectors.find(connector => connector.id === 'io.metamask');
    if (isConnected) {
        return (
          <div className="flex flex-col items-end">
            <div className="font-sm">Connected to {address}</div>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => disconnect()}>Disconnect</button>
          </div>
        );
      }
      return (
        <div className="flex flex-col items-end">
          {metaMaskConnector &&
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => connect({ connector: metaMaskConnector })}
            >{metaMaskConnector.name}</button>
          }
        </div>
      );
}
export default WalletConnectButton;