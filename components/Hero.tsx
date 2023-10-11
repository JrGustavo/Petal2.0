import Link from "next/link";
import { Inter } from 'next/font/google'
import { Typewriter } from 'react-simple-typewriter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center  dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                </div>
            </div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <Link
                    href="/"
                    className="text-zinc-400 relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-zinc-100/10 hover:ring-zinc-100/30 duration-150"
                >
                    Infraestructura financiera integrada para {" "}
                    <span className="font-semibold text-[#0070f3]">
              B2B <span aria-hidden="true">&rarr;</span>
            </span>
                </Link>
            </div>
            <div>
                <div>
                    <h1 className="py-4 text-5xl font-bold tracking-tight text-center text-white bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white sm:text-6xl">
                        Capital   {" "}
                        <span className="relative whitespace-nowrap text-[#0070f3]">
					<span className="relative"> habilitado  </span>
					</span>{" "}
                        para {" "}
                        <Typewriter
                            words={['Plataformas de E-commerce', 'Marketplaces', 'Procesadores de pago', 'Puntos de ventas']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={120}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>
                </div>

            </div>
            <p className="text-center text-white">Petal ofrece crédito comercial a Pymes que venden en plataformas digitales.</p>
            <div className="flex flex-col justify-center gap-4 mx-auto mt-8 sm:flex-row sm:max-w-lg ">
                <Link
                    href="/"
                    className="sm:w-1/2 sm:text-center inline-block space-x-2 rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-white  ring-1 ring-zinc-600 hover:bg-white hover:text-zinc-900 duration-150 hover:ring-white hover:drop-shadow-cta"
                >
                    Comercios
                </Link>
                <Link
                    href="/"
                    className="sm:w-1/2 sm:text-center inline-block transition-all space-x-2  rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-white   bg-[#0070f3] ring-1 ring-transparent hover:text-zinc-100 hover:ring-zinc-600/80  hover:bg-zinc-900/20 duration-150 hover:drop-shadow-cta"
                >
                    <span>Plataformas</span>
                    <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>
            <div>
                <div style={{ marginBottom: '30px' }} /> {/* Espacio utilizando margen inferior */}

                <div style={{ height: '30px' }} /> {/* Espacio utilizando altura */}
            </div>
        </main>
    )
}