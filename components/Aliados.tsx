export default function Example() {
    return (
        <section className="relative isolate overflow-hidden bg-[#0070f3] px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-black" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                        <p>
                            Gracias al crédito comercial que nos ofreció Petal pudimos ampliar la cocina de nuestra cafetería, comprar nuevas máquinas de café y pagar de forma flexible el crédito que nos prestó. </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <img
                            className="mx-auto h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-white">Mariana Díaz </div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-white">Propietaria de Cocina Virtual</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}
