import { Disclosure } from '@headlessui/react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const PlaysFilters = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className='py-2 flex items-center gap-8'>
            <span className={open ? 'text-buttonCol-400' : 'text-gray-700'}>
              {props.title}
            </span>
            {open ? <BiChevronUp /> : <BiChevronDown />}
          </Disclosure.Button>

          <Disclosure.Panel className='text-gray-500'>
            <div className='flex item-center gap-3 flex-wrap'>
              {props.tags.map((tag) => {
                return (
                  <>
                    <div className='border-2 border-grey-500 rounded bg-gray-200 '>
                      <span className='text-buttonCol-400 px-2 '>{tag}</span>
                    </div>
                  </>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default PlaysFilters;
