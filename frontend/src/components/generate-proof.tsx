'use client'

import { useState } from 'react'
import Loading from '@/components/ui/loading'
import { utils } from 'web3'
import ProgressBar from '@/components/ui/progressbar'
import WalletConnectButton from '@/components/ui/wallet-connection'
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from 'wagmi'
import { config } from '@/lib/config'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import mytokenAbi from '@/lib/mytoken.abi.json'
import Block from './ui/block'
import { Button } from './ui/button'

function GenerateProofBlock() {
  const { isConnected } = useAccount()
  const [inputNum, setInputNum] = useState(10)
  const [isGenerating, setIsGenerating] = useState(false)
  const [receiveAddr, setReceiveAddr] = useState('')
  const [proof, setProof] = useState<string>('')
  const [isShowSubmit, setIsShowSubmit] = useState(false)
  const [mintAmount, setMintAmount] = useState(0)
  const { data: hash, writeContract, isPending } = useWriteContract({ config })
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash })
  const clickGenerateProof = async (e: any) => {
    e.preventDefault()
    try {
      setIsGenerating(true)
      setMintAmount(inputNum)
      const response = await fetch('http://170.130.55.57:8080/generateProof', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num: inputNum }),
      })
      if (!response.ok) {
        throw new Error('Failed to connect backend server')
      }
      const retData = await response.text()
      if (retData !== 'false') {
        setIsShowSubmit(true)
      }
      setProof(retData)
      setIsGenerating(false)
    } catch (error) {
      console.error(error)
      setIsGenerating(false)
    }
  }

  const clickSubmit = async (e: any) => {
    e.preventDefault()
    if (!isConnected) {
      window.alert('Connect wallet')
      return
    }
    try {
      if (proof === 'false' || proof == 'Service is Busy') {
        return
      }
      const proofObj = JSON.parse(proof)
      const commitmentX = utils.toBigInt(
        proofObj.Proof.Commitments[0].X,
      )
      const commitmentY = utils.toBigInt(
        proofObj.Proof.Commitments[0].Y,
      )
      const commitments = [commitmentX, commitmentY]
      const uint256input = proofObj.PublicWitness.map((numStr: any) =>
        utils.toBigInt(numStr),
      )
      const aPoint = {
        X: utils.toBigInt(proofObj.Proof.Ar.X),
        Y: utils.toBigInt(proofObj.Proof.Ar.Y),
      }

      const bPoint = {
        X: [
          utils.toBigInt(proofObj.Proof.Bs.X.A0),
          utils.toBigInt(proofObj.Proof.Bs.X.A1),
        ],
        Y: [
          utils.toBigInt(proofObj.Proof.Bs.Y.A0),
          utils.toBigInt(proofObj.Proof.Bs.Y.A1),
        ],
      }

      const cPoint = {
        X: utils.toBigInt(proofObj.Proof.Krs.X),
        Y: utils.toBigInt(proofObj.Proof.Krs.Y),
      }

      const proofData = {
        a: { ...aPoint },
        b: { ...bPoint },
        c: { ...cPoint },
      }
      writeContract({
        abi: mytokenAbi,
        address: '0x676a5ad5960d08bcd3ec83f8c086b76f33aa921b',
        functionName: 'mintWithProof',
        args: [receiveAddr, mintAmount, uint256input, proofData, commitments],
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <Card>
        <div className="mx-auto mt-2 flex w-96 flex-col items-center">
          <div className="m-3 w-full">
            <WalletConnectButton />
          </div>
          <div className="mx-auto my-2 flex flex-row items-center">
            <label className="mr-2 block text-sm font-bold">Mint Amount</label>
            <input
              type="number"
              className="g-gray-50 mr-2 block w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={inputNum}
              onChange={(e) => {
                setInputNum(parseInt(e.target.value))
              }}
            />
            {isGenerating && <Loading />}
            {!isGenerating && (
              <Button onClick={(e) => clickGenerateProof(e)}>
                Generate Proof
              </Button>
            )}
          </div>
          <div className="flex w-full flex-row items-center">
            <ProgressBar duration={120} isStart={isGenerating} />
          </div>
          <div className="my-2 flex w-full flex-row items-center">
            <label className="block text-sm font-bold">Receive Address</label>
            <input
              type="text"
              className="g-gray-50 mr-2 block w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              onChange={(e) => {
                setReceiveAddr(e.target.value)
              }}
            />
          </div>
          <div className="mx-auto flex w-full flex-row items-center">
            <textarea
              className="block h-48 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={proof}
              onChange={() => {}}
            />
          </div>

          <div className="mt-2 flex flex-col items-center">
            {isShowSubmit && (
              <button
                type="button"
                className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e) => clickSubmit(e)}
              >
                {isPending ? 'Confirming...' : 'Mint'}
              </button>
            )}
            {hash && <div>Transaction Hash: {hash}</div>}
            {isConfirming && <div>Waiting for confirmation...</div>}
            {isConfirmed && <div>Transaction confirmed.</div>}
          </div>
        </div>
      </Card>
    </Block>
  )
}

export default GenerateProofBlock
