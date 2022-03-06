import { useEffect, useState } from 'react';
import type { U } from 'ts-toolbelt';

import { createEluiName } from 'lib';

const createRootElement = (id: string) => {
  const root = document.createElement('div');
  root.setAttribute('id', id);
  document.body.appendChild(root);

  return root;
};

export const usePortal = (name: string): U.Nullable<HTMLDivElement> => {
  const [portalElement, setPortalElement] = useState<HTMLDivElement>(null);

  useEffect(() => {
    const portalName = createEluiName(`portal-${name}`);
    const instance = portalElement || document.createElement('div');
    const portalRootElement = document.getElementById(portalName) || createRootElement(portalName);

    if (!portalRootElement) document.body.appendChild(portalRootElement);

    portalRootElement.appendChild(instance);
    setPortalElement(instance);

    return () => {
      instance.remove();

      if (!portalRootElement.childNodes.length) portalRootElement.parentElement?.removeChild(portalRootElement);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return portalElement;
};
