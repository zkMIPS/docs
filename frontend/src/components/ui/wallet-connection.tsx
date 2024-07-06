
'use client';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button } from "@/components/ui/button";
const WalletConnectButton = () => {
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();
    const { address, isConnected } = useAccount();
    const metaMaskConnector = connectors.find(connector => connector.id === 'io.metamask');
    if (isConnected) {
        return (
          <div className="flex flex-row justify-between items-center">
            <div className="font-sm">Connected to <b>{`${address?.substring(0,7)}...${address?.substring(address.length-7)}`}</b></div>
            <Button
            onClick={() => disconnect()}>Disconnect</Button>
          </div>
        );
      }
      return (
        <div className="flex flex-col items-end">
          {metaMaskConnector &&
            <Button
              // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => connect({ connector: metaMaskConnector })}
            >{metaMaskConnector.name}</Button>
          }
        </div>
      );
}
export default WalletConnectButton;