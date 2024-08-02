import avatar from '../assets/avatar.png';
import logo from '../assets/logo.svg';
import {
  Bag,
  BarChart,
  ChevronDown,
  Cursor,
  Menu,
  Plus,
} from '../assets/Icons';
import { Button } from '../components/shared/Button';
import { LayoutContainer } from './LayoutContainer';

export function Navbar() {
  return (
    <LayoutContainer>
      <div className='p-4 md:hidden'>
        <Menu />
      </div>
      <div className='justify-between hidden md:flex'>
        <div className='flex gap-8 items-center'>
          <a href='/'>
            <img src={logo} alt='logo' className='h-6' />
          </a>
          <ul className='flex gap-4'>
            <NavItem Icon={Cursor} title='Discover' url='/discover' />
            <NavItem
              isActive
              Icon={Bag}
              title='Marketplace'
              url='/marketplace'
            />
            <NavItem Icon={BarChart} title='Leaderboards' url='/leaderboards' />
          </ul>
        </div>
        <div className='flex gap-4'>
          <Button
            className='flex items-center gap-1 rounded-xl px-3 bg-zinc-700'
            variant='ghost'
          >
            <span>Network</span>
            <Plus />
          </Button>
          <div className='flex gap-1 items-center'>
            <img className='h-6 w-6' src={avatar} />
            <Button variant='ghost' size='icon'>
              <ChevronDown />
            </Button>
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
}

function NavItem({ Icon, title, url, isActive = false }) {
  return (
    <a
      className={`flex gap-2 items-center ${
        isActive ? 'rounded-xl p-2 bg-zinc-700' : undefined
      }`}
      href={url}
    >
      <Icon />
      <li>{title}</li>
    </a>
  );
}
