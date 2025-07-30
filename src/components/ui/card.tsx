import { IconX } from "@tabler/icons-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export const Card = () => {
    const [open, setOpen] = useState(true)

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        exit={{
                            opacity: 0,
                            scale: 0.98,
                            filter: "blur[10px]"
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut"
                        }}
                        style={{
                            width: '300px',
                            height: '416px',
                            padding: '16px',
                            background: 'white',
                            border: '1px solid #ccc',
                            borderRadius: '12px',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                        <h2 className="font-bold text-xl text-center">TaskFlux</h2>
                        <p className="text-neutral-600 mt-2 text-md text-center mb-2">Automate your workflows</p>
                        <div className="flex items-center justify-center">
                            <button
                                onClick={() => setOpen(false)}
                                className="flex px-3 py-1 space-x-1 justify-center items-center rounded-lg shadow-md">
                                <img src="/taskflux-logo.png" width={25} alt={"Taskflux logo"} />
                                <p className="text-sm">TaskFlux</p>

                                <IconX className="h-5 w-5 pt-1 text-neutral-400" />
                            </button>
                        </div>
                        <div className="relative bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.98,
                                    filter: "blur[10px]"
                                }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1.05,
                                    filter: "blur[0px]"
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100

                                }}
                                className="abolute border border-neutral-200 inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200">
                                <div className="p-4 text-md flex items-start">abcd</div>
                                <div className="p-4 text-md flex items-start">abcd</div>
                                <div className="p-4 text-md flex items-start">abcd</div>
                                <div className="p-4 text-md flex items-start">abcd</div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>

    )
}