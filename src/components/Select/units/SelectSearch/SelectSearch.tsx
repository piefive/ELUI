import { useRef, useState } from 'react';

import { usePopoverContext } from 'components/Popover';
import { isString, useMeasure, useMount, useUpdateEffect } from 'lib';

import type { TSelectSearch } from './types';
import { StyledHiddenText, StyledSearch, StyledSearchInput } from './styled';

const MIN_SEARCH_WIDTH = 22;

export const SelectSearch = ({ handleSearch, onClear, getMaxWidth, fallback = '' }: TSelectSearch) => {
  const [searchValue, setSearchValue] = useState(fallback);

  const { isPopoverOpen, forceUpdate } = usePopoverContext();
  const searchRef = useRef<HTMLInputElement>();
  const [searchTextRef, { scrollWidth }] = useMeasure(false, isPopoverOpen);

  const width = scrollWidth + MIN_SEARCH_WIDTH;
  const maxWidth = getMaxWidth() - MIN_SEARCH_WIDTH * 2;

  const handleChangeSearch = (value: string) => {
    setSearchValue(value);
    handleSearch(value);
    setTimeout(forceUpdate, 30);
  };

  useUpdateEffect(() => {
    if (isString(fallback) && fallback !== searchValue) handleChangeSearch(fallback);
  }, [fallback]);

  useMount(() => searchRef.current.focus());

  return (
    <StyledSearch>
      <StyledSearchInput
        ref={searchRef}
        value={searchValue}
        style={{ width, maxWidth }}
        onChange={event => handleChangeSearch(event.currentTarget.value)}
        onKeyDown={onClear}
        autoComplete="off"
      />
      <StyledHiddenText ref={searchTextRef} variant="b1">
        {searchValue}
      </StyledHiddenText>
    </StyledSearch>
  );
};
