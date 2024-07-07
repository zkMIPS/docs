'use client'
import { useState } from 'react'
import Loading from '@/components/ui/loading'
import { utils  } from 'web3'
import ProgressBar from '@/components/ui/progressbar'
import WalletConnectButton from '@/components/ui/wallet-connection';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { config } from '@/lib/config'
import Block from './ui/block'
import { Button } from './ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
import mytokenAbi from '@/lib/mytoken.abi.json';




const GenerateProofBlock = ()=>{
    const { isConnected } = useAccount();
    const [inputNum, setInputNum] = useState(10);
    const [isGenerating, setIsGenerating] = useState(false);
    const [receiveAddr, setReceiveAddr] = useState("");
    const [proof, setProof] = useState<string>("");
    const [isShowSubmit, setIsShowSubmit] = useState(false);
    const [mintAmount, setMintAmount] = useState(0);
    const { data: hash,  writeContract, isPending } = useWriteContract({config});
    const { isLoading: isConfirming, isSuccess: isConfirmed } =  useWaitForTransactionReceipt({ hash });
    const clickGenerateProof = async (e: any)=>{
        e.preventDefault();
        try {
            setIsGenerating(true);
            setMintAmount(inputNum);
            const response = await fetch('http://170.130.55.57:8080/generateProof', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "num":inputNum }),
            });
            if (!response.ok) {
                throw new Error('Failed to connect backend server');
            }
            const retData = await response.text();
            if (retData !== "false"){
                setIsShowSubmit(true);
            }
            setProof(retData);
            setIsGenerating(false);
        }catch(error){
            console.error(error);
            setIsGenerating(false);
        }
    }

    const clickSubmit = async (e: any) =>{
        e.preventDefault();
        if (!isConnected) {
            window.alert('Connect wallet');
            return;
        }
        try{
            if (proof === "false" || proof == "Service is Busy") {
                return;
            }
            const proofObj = JSON.parse(proof);
            const commitmentX = utils.toBigInt(proofObj['Proof']['Commitments'][0]['X']);
            const commitmentY = utils.toBigInt(proofObj['Proof']['Commitments'][0]['Y']);
            const commitments = [commitmentX, commitmentY];
            const uint256input = proofObj['PublicWitness'].map((numStr:any) => utils.toBigInt(numStr));
            const aPoint = {
                X: utils.toBigInt(proofObj['Proof']['Ar']['X']),
                Y: utils.toBigInt(proofObj['Proof']['Ar']['Y'])
            };

            const bPoint = {
                X: [utils.toBigInt(proofObj['Proof']['Bs']['X']['A0']), utils.toBigInt(proofObj['Proof']['Bs']['X']['A1'])],
                Y: [utils.toBigInt(proofObj['Proof']['Bs']['Y']['A0']), utils.toBigInt(proofObj['Proof']['Bs']['Y']['A1'])]
            };

            const cPoint = {
                X: utils.toBigInt(proofObj['Proof']['Krs']['X']),
                Y: utils.toBigInt(proofObj['Proof']['Krs']['Y'])
            };

            const proofData = {
                a: { ...aPoint },
                b: { ...bPoint },
                c: { ...cPoint }
            };
            writeContract({
                abi: mytokenAbi,
                address: "0x676a5ad5960d08bcd3ec83f8c086b76f33aa921b",
                functionName: "mintWithProof",
                args:[
                    receiveAddr,
                    mintAmount,
                    uint256input,
                    proofData,
                    commitments
                ]
            });

        }catch(error){
            console.error(error);
        }
    }

    return (
        <Block className="col-span-12 row-span-2 md:col-span-6">
            <Card>
                <div className='flex flex-col items-center mx-auto w-96 mt-2'>
                    <div className='w-full m-3'>
                        <WalletConnectButton/>
                    </div>
                    <div className='flex flex-row items-center mx-auto my-2'>
                        <label className="block text-sm font-bold mr-2">Mint Amount</label>
                        <input type='number'
                        className="mr-2 g-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={inputNum} onChange={(e)=>{
                            setInputNum(parseInt(e.target.value))
                        }}/>
                        {isGenerating &&<Loading />}
                        {!isGenerating && <Button onClick={(e)=>clickGenerateProof(e)}>Generate Proof</Button>
                        }
                    </div>
                    <div className='flex flex-row items-center w-full'>
                        <ProgressBar duration={120} isStart={isGenerating}  />
                    </div>
                    <div className="flex flex-row items-center w-full my-2">
                        <label className="block text-sm font-bold">Receive Address</label>
                        <input type='text' className="mr-2 g-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) =>{
                            setReceiveAddr(e.target.value)
                        }}
                        />

                    </div>
                    <div className='flex flex-row items-center mx-auto w-full'>
                        <textarea className='block p-2.5 w-full h-48 text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        value={proof} onChange={()=>{}} />
                    </div>

                    <div className='flex flex-col items-center mt-2'>
                        {isShowSubmit && <button type='button' className = 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                            onClick={(e)=>clickSubmit(e)}>{isPending ? 'Confirming...' : 'Mint'}</button>
                        }
                        { hash && <div>Transaction Hash: {hash}</div> }
                        {isConfirming && <div>Waiting for confirmation...</div>}
                        {isConfirmed && <div>Transaction confirmed.</div>}
                    </div>
                </div>
            </Card>
        </Block>
    )
}

export default GenerateProofBlock;