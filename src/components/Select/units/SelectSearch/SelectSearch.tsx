import { ChangeEventHandler, useRef, useState } from 'react';

import { usePopoverContext } from 'components/Popover';
import { useMeasure, useMount, useUpdateEffect } from 'lib';

import type { TSelectSearch } from './types';
import { StyledHiddenText, StyledSearch, StyledSearchInput } from './styled';

const MIN_SEARCH_WIDTH = 22;

export const SelectSearch = ({ handleSearch, fallback = '' }: TSelectSearch) => {
  const [searchValue, setSearchValue] = useState(fallback);

  const { isPopoverOpen } = usePopoverContext();
  const searchRef = useRef<HTMLInputElement>();
  const [searchTextRef, { scrollWidth }] = useMeasure(false, isPopoverOpen);

  const searchWidth = scrollWidth + MIN_SEARCH_WIDTH;

  const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = event => {
    const { value } = event.currentTarget;

    setSearchValue(value);
    handleSearch(value);
  };

  useUpdateEffect(() => {
    if (fallback !== searchValue) {
      setSearchValue(fallback);
      handleSearch(fallback);
    }
  }, [fallback]);

  useMount(() => searchRef.current.focus());

  return (
    <StyledSearch>
      <StyledSearchInput
        ref={searchRef}
        value={searchValue}
        style={{ width: searchWidth }}
        onChange={handleChangeSearch}
        autoComplete="off"
      />
      <StyledHiddenText ref={searchTextRef} variant="b1">
        {searchValue}
      </StyledHiddenText>
    </StyledSearch>
  );
};
