import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Transition,
} from '@headlessui/react'
import {
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/20/solid'

const products = [
    { name: 'Phần mềm nhà xe' },
    { name: 'Phần mềm đại lý' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-blue-600">
            <nav className="mx-auto flex flex-row justify-between py-6 px-3" aria-label="Global">
                <div>
                    <div className="flex">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Vexere</span>
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
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
                </div>

                <div className="flex items-center gap-9">
                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                        <a href="#" className="text-sm font-semibold leading-6 text-white">
                            Quản lý đơn hàng
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white">
                            Mở bán vé trên Vexere
                        </a>
                        <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                                Trở thành đối tác
                                <ChevronDownIcon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
                            </PopoverButton>
                            <Transition
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <PopoverPanel className="absolute top-full z-10 mt-3 w-fit overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                                    <div className="p-4 w-max">
                                        {products.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-200"
                                            >

                                                <div className="flex-auto w-fit">
                                                    <a href="#" className="block font-semibold text-black w-fit">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </PopoverPanel>
                            </Transition>
                        </Popover>
                    </PopoverGroup>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
                        <button
                            type="button"
                            className="rounded bg-white px-4 py-2 text-xs font-bold leading-normal text-gray-800 flex items-center gap-2"
                        >
                            <PhoneIcon className="h-4 w-4 flex-none text-gray-700" aria-hidden="true" />
                            Hotline 24/7
                        </button>
                        <button
                            type="button"
                            className="rounded bg-white px-6 py-2 text-xs font-bold leading-normal text-gray-800 flex items-center"
                        >
                            Đăng nhập
                        </button>
                    </div>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Vexere</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                                >
                                    Quản lý đơn hàng
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                                >
                                    Mở bán vé trên Vexere

                                </a>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-black hover:bg-gray-50">
                                                Trở thành đối tác
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {[...products].map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-black hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                            <div className="py-6 flex gap-3">
                                <button
                                    type="button"
                                    className="rounded bg-gray-800 px-4 py-2 text-xs font-bold leading-normal text-white flex items-center gap-2"
                                >
                                    <PhoneIcon className="h-4 w-4 flex-none text-white" aria-hidden="true" />
                                    Hotline 24/7
                                </button>
                                <button
                                    type="button"
                                    className="rounded bg-gray-800 px-6 py-2 text-xs font-bold leading-normal text-white flex items-center"
                                >
                                    Đăng nhập
                                </button>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}