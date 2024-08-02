import { Button } from '../shared/Button';

export function MarketPlaceHeader() {
  return (
    <div className='flex sm:justify-between sm:flex-row flex-col items-center md:gap-0 gap-5'>
      <h1 className='text-lg md:text-[28px] font-semibold'>Marketplace</h1>
      <div className='rounded-full flex items-center px-3 bg-zinc-800 text-xs w-[270px]'>
        <Button variant='ghost'>Active</Button>
        <Button className='rounded-full px-3 bg-zinc-700' variant='ghost'>
          Recommended
        </Button>
        <Button variant='ghost'>All Products</Button>
      </div>
    </div>
  );
}
