import { useEffect, useState } from 'react';
import { Input } from './ui/input';

export const StorageUnitConverter = () => {
  const [tib, setTib] = useState('');
  const [tb, setTb] = useState('');

  useEffect(() => {
    if (!tib) {
      setTb('');
      return;
    }

    const tibNumber = Number(tib);
    if (isNaN(tibNumber)) {
      setTb('Invalid number');
      return;
    }

    const newValue = tibNumber * Math.pow(1024 / 1000, 4);
    setTb(newValue.toFixed(8)); // limits to 4 decimal places
  }, [tib]);

  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-semibold">Storage Unit Converter :</h2>
      <div className="border p-2 rounded-lg flex items-center gap-2 w-max">
        <Input value={tib} onChange={(e) => setTib(e.target.value)} placeholder="Enter TiB" />
        <span>TiB</span>
        <span>=</span>
        <Input value={tb} disabled />
        <span className="mr-2">TB</span>
      </div>
      <p className="text-muted-foreground text-sm">TB will be used for calculation</p>
    </div>
  );
};
