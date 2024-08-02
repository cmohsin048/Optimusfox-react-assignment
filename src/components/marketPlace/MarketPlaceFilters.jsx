import { ChevronDown, Grid, DotsGrid } from '../../assets/Icons';

export function MarketPlaceFilters() {
  return (
    <div className='hidden xl:flex justify-between'>
      <div className='flex gap-3'>
        <Filter title='Category' />
        <Filter title='Type' />
        <Filter title='Verified' />
        <Filter title='Blockchain' />
      </div>
      <div className='flex gap-3 items-center'>
        <Filter title='Sort by' value='Trending' />
        <Filter title='View' Icon1={Grid} Icon2={DotsGrid} />
      </div>
    </div>
  );
}

function Filter({ title, value = 'All', Icon1, Icon2 }) {
  return (
    <div className='flex flex-col gap-2 relative text-xs'>
      <h1>{title}</h1>
      {!Icon1 || !Icon2 ? (
        <>
          <select className='w-[220px] rounded-xl px-3 bg-zinc-800 py-3'>
            <option className='text-sm'>{value}</option>
          </select>
          <div className='absolute top-[37px] left-[184px]'>
            <ChevronDown />
          </div>
        </>
      ) : (
        <div className='flex gap-2 rounded-xl bg-zinc-800'>
          <div className='rounded-xl px-3 py-2 bg-zinc-700'>
            <Icon1 />
          </div>
          <div className='rounded-xl px-3 py-2 bg-zinc-800'>
            <Icon2 />
          </div>
        </div>
      )}
    </div>
  );
}
