export interface ChassisConfiguration {
  slots: Slots;
  hdd: Hdd;
  ssd: Ssd;
  nvme: Nvme;
  rgw: Rgw;
  nic: Nic;
  cpu: Cpu;
  maxMemSize: number;
}

interface Slots {
  maxHdd: number;
  maxSsd: number;
  maxNvme: number;
  maxDrives: number;
  maxPci: number;
  maxDedicatedNVMe: number;
  totalMedia: number;
}

interface Hdd {
  size1TB: number;
  useSSDForFronting: boolean;
  hddSsdType4SizeTB: number;
  hddNvmeType4SizeTB: number;
  countPerSsdType4: number;
  countPerNvmeType4: number;
}

interface Ssd {
  ssdSize1TB: number;
  ssdFrontedByNvmeType3ForWal: boolean;
  ssdNvmeType5SizeTB: number;
  ssdCountPerNvmeType5: number;
  ssdNvmeType3SizeTB: number;
  ssdCountPerNvmeType3: number;
}

interface Nvme {
  nvmeType1SizeTB: number;
  nvmeType1FrontedByNvmeType7: boolean;
  nvmeType7SizeTB: number;
  nvmeType1CountPerNvmeType7: number;
  nvmeType1FrontedByNvmeType8: boolean;
  nvmeType8SizeTB: number;
  nvmeType1CountPerNvmeType8: number;
}

interface Rgw {
  rgwIndexNvmeType6SizeTB: number;
  rgwCachingEnabled: boolean;
  rgwCacheNvmeType2SizeTB: number;
}

interface Nic {
  nicSpeedPublicGbps: number;
  nicSpeedClusterGbps: number;
}

interface Cpu {
  cpuSocketsMax: number;
  vcoresPerCpuMax: number;
}
