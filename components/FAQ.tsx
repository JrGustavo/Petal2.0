import Image from "next/image";
import React from "react";


const features = [
    { name: 'Crédito basado en ventas', description: 'Otorgamos créditos comerciales basados en las ventas de tú negocio.' },
    { name: 'Precios transparentes', description: 'Cobramos una tarifa plana sin intereses de acuerdo al crédito comercial solicitado.' },
    { name: 'Pagos automatizados', description: 'Mientras tu negocio vende, destinas un % de tus ventas para reembolsar el crédito.' },
    { name: 'Desembolsos en pocas horas', description: 'Con Petal obtienes tú crédito comercial en horas y no en días.' },
    { name: 'Invierte en tú crecimiento', description: 'Obtén crédito comercial para ampliar tu negocio o comprar una nueva máquina.' },
    { name: 'Mejora tú calidad de vida', description: 'Petal ofrece la tecnología y el financiamiento, tú aumentas tus ventas.' },
]

export default function Example() {
    return (
        <div className="bg-black">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Beneficios Petal</h2>
                    <p className="mt-4 text-white">
                        Sabemos lo complicado que es solicitar crédito comercial con los bancos tradicionales y el miedo que genera no pagar a tiempo a los prestamistas informales (Gota a Gota).
                        Petal nace para ayudar a las Pymes a crecer.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-[#0070f3]">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-white">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <Image
                        src="/PetalPymes.png"
                        alt="Logo de Petal"
                        width={500}
                        height={500}
                        className="rounded-lg bg-blue-800"
                        style={{ borderRadius: "8%" }}
                    />
                    <Image
                        src="/POSPetal.png"
                        alt="Logo de Petal"
                        width={500}
                        height={500}
                        className="rounded-lg bg-blue-800"
                        style={{ borderRadius: "8%" }}
                    />
                    <Image
                        src="/PymesPetal.png"
                        alt="Logo de Petal"
                        width={500}
                        height={500}
                        className="rounded-lg bg-blue-800"
                        style={{ borderRadius: "8%" }}
                    />
                    <Image
                        src="/RestaurantsPetal.png"
                        alt="Logo de Petal"
                        width={500}
                        height={500}
                        className="rounded-lg bg-blue-800"
                        style={{ borderRadius: "8%" }}
                    />
                </div>
            </div>
        </div>
    )
}
