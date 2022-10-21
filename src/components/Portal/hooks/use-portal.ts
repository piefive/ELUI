import { useEffect, useState } from 'react';
import type { U } from 'ts-toolbelt';

import { bindSemantics, createEluiName } from 'lib';

const createRootElement = (id: string) => {
  const root = document.createElement('div');
  root.setAttribute('id', id);
  document.body.appendChild(root);

  return root;
};

export const usePortal = (name: string, semantics?: string): U.Nullable<HTMLDivElement> => {
  const [portalElement, setPortalElement] = useState<HTMLDivElement>(null);

  useEffect(() => {
    const portalName = createEluiName(`portal-${name}`);
    const instance = portalElement || document.createElement('div');

    const portalRootElement = document.getElementById(portalName) || createRootElement(portalName);
    portalRootElement.appendChild(instance);

    if (!portalRootElement) document.body.appendChild(portalRootElement);
    setPortalElement(instance);

    return () => {
      instance.remove();
      setPortalElement(null);

      if (!portalRootElement.childNodes.length) portalRootElement.parentElement?.removeChild(portalRootElement);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  useEffect(() => {
    if (!portalElement || !semantics) return;

    const semanticsAttr = bindSemantics(semantics);

    for (const key in semanticsAttr) {
      const value = semanticsAttr[key as keyof typeof semanticsAttr];
      portalElement.setAttribute(key, value);
    }
  }, [portalElement, semantics]);

  return portalElement;
};
