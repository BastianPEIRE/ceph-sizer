import { Input } from './ui/input';

export const StorageUnitConverter = () => {
  return (
    <div>
      <h2 className="font-semibold">Storage Unit Converter :</h2>
      <div className="border p-1 rounded-lg flex items-center gap-2 w-max bg-zinc-200 dark:bg-zinc-700">
        <Input className="bg-white dark:bg-zinc-800/50" />
        <span>TiB</span>
        <span>=</span>
        <Input className="bg-white" disabled />
        <span className="mr-2">TB</span>
      </div>
      <p className="text-muted-foreground text-sm">TB will be used for calculation</p>
    </div>
  );
};
