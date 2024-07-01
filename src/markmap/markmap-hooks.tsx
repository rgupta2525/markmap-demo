import React, { useState, useRef, useEffect } from 'react';
import { Markmap } from 'markmap-view';
import { transformer } from './markmap';

export default function MarkmapHooks({data}: {data: string}) {
  const [value, setValue] = useState(data);
  const refSvg = useRef<SVGSVGElement>(null);
  const refMm = useRef<Markmap>();

  useEffect(() => {
    if (refSvg.current && !refMm.current) {
      const mm = Markmap.create(refSvg.current);
      refMm.current = mm;
    }
  }, []);

  useEffect(() => {
    if (refMm.current) {
      const { root } = transformer.transform(value);
      refMm.current.setData(root);
      refMm.current.fit();
    }
  }, [value]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg style={{ width: '800px', height: '600px' }} ref={refSvg} />
    </div>
  );
}
