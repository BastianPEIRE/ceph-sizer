import { Icon, Server } from 'lucide-react';
import { Button, buttonVariants } from './ui/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from './ui/empty';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { ChassisConfigForm } from './forms/chassis/chassis-label-config.form';
import { Accordion } from '@radix-ui/react-accordion';

export const ChassisConfigOptions = () => {
  const headers1 = {
    slots: {
      maxHdd: 'max HDD of all drive slots',
      maxSsd: '#slots max SSD of all drive slots',
      maxNvme: '#slots max NVMe of all drive slots',
      maxDrives: '# max slots for HDD, SSD and NVMe (in sum, in drive slots)',
      maxPci: 0,
      maxDedicatedNVMe: 0,
      totalMedia: 0,
    },
    hdd: {
      size1TB: 'number',
      useSSDForFronting: 'boolean',
      hddSsdType4SizeTB: 'number',
      hddNvmeType4SizeTB: 'number',
      countPerSsdType4: 'number',
      countPerNvmeType4: 'number',
    },
    ssd: {
      ssdSize1TB: 'number',
      ssdFrontedByNvmeType3ForWal: 'boolean',
      ssdNvmeType5SizeTB: 'number',
      ssdCountPerNvmeType5: 'number',
      ssdNvmeType3SizeTB: 'number',
      ssdCountPerNvmeType3: 'number',
    },
    nvme: {
      nvmeType1SizeTB: 'number',
      nvmeType1FrontedByNvmeType7: 'boolean',
      nvmeType7SizeTB: 'number',
      nvmeType1CountPerNvmeType7: 'number',
      nvmeType1FrontedByNvmeType8: 'boolean',
      nvmeType8SizeTB: 'number',
      nvmeType1CountPerNvmeType8: 'number',
    },
    rgw: {
      rgwIndexNvmeType6SizeTB: 'number',
      rgwCachingEnabled: 'boolean',
      rgwCacheNvmeType2SizeTB: 'number',
    },
    nic: {
      nicSpeedPublicGbps: 'number',
      nicSpeedClusterGbps: 'number',
    },
    cpu: {
      cpuSocketsMax: 'number',
      vcoresPerCpuMax: 'number',
    },
    maxMemSize: 'number;',
  };
  const headers = [
    '#slots max HDD of all drive slots',
    '#slots max SSD of all drive slots',
    '#slots max NVMe of all drive slots',
    '# max slots for HDD, SSD and NVMe (in sum, in drive slots)',
    '# dedicated slots max NVMe (beside SSD or HDD)',
    '#slots for media (in sum)',
    '#CPU sockets max',
    '#vcores/threads per CPU max (1 HT core = 2 vcores/threads)',
    'max MEM size',
    '#PCI slots max',
    'NIC speed per port in Gb/sec for public network',
    'NIC speed per port in Gb/sec for cluster network',
    'HDD size 1 in TB',
    'HDD: Use SSD for fronting HDD instead of NVMe',
    "HDD: SSD type 4 (for dedicated RocksDB+WAL) size in TB (0 => don't use SSD for HDD fronting)",
    'HDD: #HDD per SSD type 4 for RocksDB+WAL (#HDD covered by SSD)',
    "HDD: NVMe type 4 (for dedicated RocksDB+WAL) size in TB (0 => don't use NVMe for HDD fronting)",
    'HDD: #HDD per NVMe type 4 for RocksDB+WAL (#HDD covered by NVMe)',
    'SSD: SSD size 1 in TB',
    'SSD: SSD fronted by NVMe type 3 for WAL ?',
    "SSD: NVMe type 5 (for dedicated RocksDB+WAL) size in TB (0 => don't use NVMe for SSD fronting)",
    'SSD: SSD fronted by NVMe type 5 for RocksDB/WAL (#SSD covered by NVMe)',
    "SSD: NVMe type 3 (for dedicated WAL) size in TB (0 => don't use NVMe3 for fronting)",
    'SSD: #SSD per NVMe type 3 for WAL (#SSD covered by one NVMe)',
    'NMVe: NVMe type 1 (for data) size in TB',
    'NVMe: NVMe type 1 fronted by NVMe type 7 for RocksDB ?',
    'NMVe: NVMe7 (as RocksDB for NVMe1) size in TB',
    'NMVe: #NVMe1 per NVMe type 7 for RocksDB (#NVMe covered by one NVMe7)',
    'NVMe: NVMe type 1 fronted by NVMe type 8 for WAL ?',
    'NMVe: NVMe8 (as WAL for NVMe1) size in TB',
    'NMVe: #NVMe1 per NVMe type 8 for WAL (#NVMe covered by one NVMe8)',
    'RGW index: NVMe type 6 (for RGW dedicated index pools) size in TB',
    'RGW cache: Use RGW caching ? (x=yes) - this per config, otherwise the cache device is ignored',
    'RGW cache: NVMe type 2 (for RGW cache) size in TB',
  ];

  return (
    <>
      <div className="border rounded-lg">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Server />
            </EmptyMedia>
            <EmptyTitle>No Chassis Configuration found</EmptyTitle>
            <EmptyDescription>No data found</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Sheet>
              <SheetTrigger className={buttonVariants()}>Create a configuration</SheetTrigger>
              <SheetContent className="min-w-[40vw] sm:min-w-[540px]">
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account and
                    remove your data from our servers.
                  </SheetDescription>
                  <ChassisConfigForm />
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </EmptyContent>
        </Empty>
      </div>
    </>
  );
};
