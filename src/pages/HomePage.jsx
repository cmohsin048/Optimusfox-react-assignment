import React from 'react';
import { NftSection } from '../components/marketPlace/NftSection';
import { MarketPlaceFilters } from '../components/marketPlace/MarketPlaceFilters';
import { MarketPlaceHeader } from '../components/marketPlace/MarketPlaceHeader';
import { MarketPlaceSubmenu } from '../components/marketPlace/MarketPlaceSubmenu';
import { LayoutContainer } from '../layout/LayoutContainer';

export function HomePage() {

  return (
    <LayoutContainer>
      <MarketPlaceHeader />
      <MarketPlaceSubmenu  />
      <MarketPlaceFilters />
      <NftSection />
    </LayoutContainer>
  );
}
