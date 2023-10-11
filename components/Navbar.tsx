import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'


const navigation = [
    { name: 'Plataformas', href: '/' },
    { name: 'Comercios', href: '/' },
    { name: 'Desarrolladores', href: '/' },
    { name: 'Nosotros', href: '/' },
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="bg-grey">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Petal</span>
                            <Image
                                src="/PetalLogoWhite.png"
                                width={120}
                                height={120}
                                alt="Logo de Petal"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a
                            href="https://login.petal.com.co"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative text-sm font-semibold leading-6 text-white bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-3 rounded-lg transition-all hover:from-blue-600 hover:to-blue-800"
                        >
                            Ingresa a tu cuenta
                            <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>


                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Petal</span>
                                <Image
                                    src="/PetalLogoWhite.png"
                                    width={120}
                                    height={120}
                                    alt="Logo de Petal"
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="https://login.petal.com.co"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative text-sm font-semibold leading-6 text-white bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-3 rounded-lg transition-all hover:from-blue-600 hover:to-blue-800"
                                    >
                                        Ingresa a tu cuenta
                                        <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}
