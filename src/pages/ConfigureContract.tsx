import { useState } from 'react'
import {
    useAccount,
    // useReadContract,
    useWaitForTransactionReceipt,
    useWriteContract,
} from 'wagmi'
import contractABI from '../RebelMint/src/contract/abi'
import { useSearchParams } from 'react-router-dom'
interface ContractDetails {
    title: string
    creator: string
    desc: string
    paymentAddress: string
    royaltyPercentage: number
}

const ConfigureContract = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const contractAddress = searchParams.get('contract')
    const { writeContractAsync, data: hash } = useWriteContract()
    const { address } = useAccount()
    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
            confirmations: 1,
        })
    const [form, setForm] = useState<ContractDetails>({
        title: '',
        creator: '',
        desc: '',
        paymentAddress: address as `0x${string}`,
        royaltyPercentage: 10,
    })
    const { title, creator, desc, paymentAddress, royaltyPercentage } = form
    const [input, setInput] = useState('')

    const isValidForm =
        title && creator && desc && paymentAddress && royaltyPercentage
            ? true
            : false

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }))
    }

    const setCollectionData = async () => {
        try {
            await writeContractAsync({
                abi: contractABI,
                address: contractAddress as `0x${string}`,
                functionName: 'setCollectionData',
                args: [
                    form.title,
                    form.creator,
                    form.desc,
                    form.paymentAddress as `0x${string}`,
                    BigInt(form.royaltyPercentage * 100),
                ],
            })
            console.log('Transaction sent successfully')
            console.log(hash)
        } catch (error) {
            console.error('Error sending transaction:', error)
        }
    }

    const inputClass =
        'flex-1 p-3 border h-2 bg-bgcol border-textcol rounded-lg font-normal'

    if (contractAddress) {
        return (
            <div className="flex h-fit min-h-[100svh] w-full flex-col gap-5 text-wrap bg-bgcol p-4 font-satoshi font-bold text-textcol md:p-24">
                <h1 className="text-3xl">Collection Details</h1>
                <div className="flex w-full flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <h3>Collection Name</h3>
                        <input
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            className={inputClass + ' w-1/3 min-w-[26rem]'}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3>Creator</h3>
                        <input
                            name="creator"
                            value={form.creator}
                            onChange={handleChange}
                            className={inputClass + ' w-1/3 min-w-[26rem]'}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3>Description</h3>
                        <textarea
                            name="desc"
                            value={form.desc}
                            onChange={handleChange}
                            className={
                                inputClass + ' h-fit min-h-32 resize-none'
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3>Default Payment Address</h3>
                        <input
                            name="paymentAddress"
                            value={form.paymentAddress}
                            onChange={handleChange}
                            className={inputClass + ' w-[26rem]'}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3>Royalty %</h3>

                        <input
                            typeof="number"
                            name="royaltyPercentage"
                            value={form.royaltyPercentage}
                            onChange={handleChange}
                            className={inputClass + ' w-24'}
                        />
                    </div>
                    <button
                        className="w-fit self-end rounded-lg bg-textcol p-4 text-bgcol disabled:invert-[30%]"
                        disabled={isConfirming || isConfirmed || !isValidForm}
                        onClick={setCollectionData}
                    >
                        {isConfirming
                            ? 'Updating Collection...'
                            : 'Submit Details'}
                    </button>
                    {isConfirmed && (
                        <a
                            className="w-fit self-end rounded-lg bg-textcol p-4 text-bgcol disabled:invert-[30%]"
                            href={`/tokenmanager?contract=${contractAddress}`}
                            target="_blank"
                        >{`Create Tokens for ${form.title} ->`}</a>
                    )}
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex h-fit min-h-[100svh] w-full flex-col items-center gap-5 text-wrap bg-bgcol p-24 font-satoshi text-9xl font-bold text-textcol">
                <div className="flex h-fit min-h-[100svh] w-full flex-col items-center justify-center gap-5 text-wrap bg-bgcol p-24 font-satoshi text-9xl font-bold text-textcol">
                    <div className="absolute right-0 top-0 m-5 h-fit w-fit">
                        <w3m-network-button />
                    </div>
                    <form
                        className="mb-4 flex flex-col items-center gap-2 text-sm md:text-base lg:flex-row"
                        onSubmit={(e) => {
                            e.preventDefault()
                            setSearchParams(input ? { contract: input } : '')
                        }}
                    >
                        <input
                            spellCheck={false}
                            className="h-[3rem] w-[23rem] rounded-md border-2 border-textcol bg-bgcol p-2 text-textcol md:w-[26rem]"
                            placeholder="Contract Address"
                            onChange={(e) => {
                                setInput(e.target.value)
                            }}
                        ></input>
                        <button
                            type="submit"
                            className="h-[3rem] w-[23rem] rounded-lg bg-textcol text-bgcol hover:invert-[5%] active:invert-[10%] md:w-[26rem] lg:w-fit lg:px-4"
                        >
                            Choose Contract
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ConfigureContract
