import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export const StorageUnitSelector = () => {
  return (
    <Select defaultValue="tib">
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Select a storage unit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Storage Unit</SelectLabel>
          <SelectItem value="tib">TiB</SelectItem>
          <SelectItem value="tb">TB</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
