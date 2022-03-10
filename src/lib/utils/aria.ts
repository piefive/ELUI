import type { AriaAttributes } from 'react';
import type { U } from 'ts-toolbelt';

type TAria = {
  disabled: AriaAttributes['aria-disabled'];
  activedescendant: AriaAttributes['aria-activedescendant'];
  atomic: AriaAttributes['aria-atomic'];
  autocomplete: AriaAttributes['aria-autocomplete'];
  busy: AriaAttributes['aria-busy'];
  checked: AriaAttributes['aria-checked'];
  colcount: AriaAttributes['aria-colcount'];
  colindex: AriaAttributes['aria-colindex'];
  colspan: AriaAttributes['aria-colspan'];
  controls: AriaAttributes['aria-controls'];
  current: AriaAttributes['aria-current'];
  describedby: AriaAttributes['aria-describedby'];
  details: AriaAttributes['aria-details'];
  dropeffect: AriaAttributes['aria-dropeffect'];
  errormessage: AriaAttributes['aria-errormessage'];
  expanded: AriaAttributes['aria-expanded'];
  flowto: AriaAttributes['aria-flowto'];
  grabbed: AriaAttributes['aria-grabbed'];
  haspopup: AriaAttributes['aria-haspopup'];
  hidden: AriaAttributes['aria-hidden'];
  invalid: AriaAttributes['aria-invalid'];
  keyshortcuts: AriaAttributes['aria-keyshortcuts'];
  label: AriaAttributes['aria-label'];
  labelledby: AriaAttributes['aria-labelledby'];
  level: AriaAttributes['aria-level'];
  live: AriaAttributes['aria-live'];
  modal: AriaAttributes['aria-modal'];
  multiline: AriaAttributes['aria-multiline'];
  multiselectable: AriaAttributes['aria-multiselectable'];
  orientation: AriaAttributes['aria-orientation'];
  owns: AriaAttributes['aria-owns'];
  placeholder: AriaAttributes['aria-placeholder'];
  posinset: AriaAttributes['aria-posinset'];
  pressed: AriaAttributes['aria-pressed'];
  readonly: AriaAttributes['aria-readonly'];
  relevant: AriaAttributes['aria-relevant'];
  required: AriaAttributes['aria-required'];
  roledescription: AriaAttributes['aria-roledescription'];
  rowcount: AriaAttributes['aria-rowcount'];
  rowindex: AriaAttributes['aria-rowindex'];
  rowspan: AriaAttributes['aria-rowspan'];
  selected: AriaAttributes['aria-selected'];
  setsize: AriaAttributes['aria-setsize'];
  sort: AriaAttributes['aria-sort'];
  valuemax: AriaAttributes['aria-valuemax'];
  valuemin: AriaAttributes['aria-valuemin'];
  valuenow: AriaAttributes['aria-valuenow'];
  valuetext: AriaAttributes['aria-valuetext'];
};

export const bindAria = (attributes: U.Nullable<Partial<TAria>> = null) => {
  const ariaAttributes = <Partial<AriaAttributes>>{};

  if (attributes)
    for (const key in attributes) {
      const ariaKey = <keyof AriaAttributes>`aria-${key}`;
      const attributeKey = <keyof typeof attributes>key;
      ariaAttributes[ariaKey] = <never>attributes[attributeKey];
    }

  return ariaAttributes;
};

export const getAria = <Key extends keyof AriaAttributes>(key: Key, value: AriaAttributes[Key]) => `${key}=${value}`;
