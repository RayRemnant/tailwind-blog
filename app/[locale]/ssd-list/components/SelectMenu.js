import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const flags = {
  amazon_com: 'https://flagicons.lipis.dev/flags/4x3/us.svg',
  amazon_it: 'https://flagicons.lipis.dev/flags/4x3/it.svg',
}

const shopOptions = [
  { id: 'amazon_com', name: 'Amazon.com', flag: 'usa' },
  { id: 'amazon_it', name: 'Amazon.it', flag: 'italy' },
]

export default function SelectShop({ selectedShop, setSelectedShop, onChange }) {
  return (
    <Listbox value={selectedShop} onChange={setSelectedShop}>
      {({ open }) => (
        <>
          {/*           <Listbox.Label className="block text-sm font-medium leading-6 text-gray-700">Select Shop:</Listbox.Label>
           */}
          <div className="relative">
            <Listbox.Button className="border relative w-full py-2 pl-3 pr-10 text-left  rounded-md shadow-sm focus:outline-none focus:ring-2 sm:text-sm">
              <span className="flex items-center">
                <img src={flags[selectedShop]} alt={selectedShop} className="w-6 h-6 rounded-full" />
                <span className="ml-3 block truncate">
                  {shopOptions.find((option) => option.id === selectedShop)?.name}
                </span>
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Listbox.Options
                static
                className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white absolute z-10 mt-1 w-full shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm border "
              >
                {shopOptions.map((option, index) => (
                  <Listbox.Option key={option.id} value={option.id}>
                    {({ active }) => (
                      <div
                        className={`cursor-pointer select-none relative py-2 pl-10 pr-4 hover:bg-gray-800 transition-colors duration-300`}
                      >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <img src={flags[option.id]} alt={option.id} className="w-6 h-6 rounded-full" />
                        </span>
                        <span className="font-normal block truncate">{option.name}</span>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
