import {CheckCircleIcon} from "@heroicons/react/20/solid";
const includedFeatures = [
    'Modelo patentado de prevención del fraude',
    'KYC & AML confiable',
    'Informes personalizados',
    'Crédito basado en ventas',
]

export default function Example() {
    return (
        <div className="bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">¿Todo listo para empezar?</h2>
                    <p className="mt-6 text-lg leading-8 text-white">
                        Nuestra solución le ayuda a los pequeños comercios a crecer. Las plataformas B2B utilizan Petal para mejorar de forma exponencial tus métricas principales.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-white">Integraciones con pocas líneas de código</h3>
                        <p className="mt-6 text-base leading-7 text-white">
                            Utilizamos la metodología API-First para integrarnos rápidamente con las diferentes plataformas B2B.
                            Te invitamos a consultar nuestra documentación.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-[#0070f3]">Beneficios Petal</h4>
                            <div className="h-px flex-auto bg-white" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckCircleIcon className="h-6 w-5 flex-none text-[#0070f3]" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-black">Tú GMV, aumenta un</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">35%</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">MOM</span>
                                </p>
                                <a
                                    href="#"
                                    className="mt-10 block w-full rounded-md bg-[#0070f3] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Hablar con ventas
                                </a>
                                <p className="mt-6 text-xs leading-5 text-black">
                                    Una vez completado el registro recibes el link de acceso a nuestra plataforma financiera Petal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}