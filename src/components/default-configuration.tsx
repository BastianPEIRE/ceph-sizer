import { ChassisConfigForm } from './forms/chassis-config.form';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

export const DefaultConfiguration = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg">Configuration</AccordionTrigger>
        <AccordionContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Question</TableHead>
                <TableHead>Option #1</TableHead>
                <TableHead>Option #2</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>All servers have the same NIC, cores & mem in config ?</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Checkbox id="radiobutton-similar-config" />
                    <Label htmlFor="radiobutton-similar-config">Same config</Label>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Checkbox id="radiobutton-dissimilar-config" />
                    <Label htmlFor="radiobutton-dissimilar-config">Different config</Label>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  All servers have the same number and types of media for capacity in config ?
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Checkbox id="radiobutton-similar-media-config" />
                    <Label htmlFor="radiobutton-similar-media-config">Same config</Label>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Checkbox id="radiobutton-dissimilar-media-config" />
                    <Label htmlFor="radiobutton-dissimilar-media-config">Similar config</Label>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  All servers have the exactly the same number and types of media in config ?
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Checkbox id="radiobutton-same-media-config" />
                    <Label htmlFor="radiobutton-same-media-config">Exactly same config</Label>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Checkbox id="radiobutton-different-media-config" />
                    <Label htmlFor="radiobutton-different-media-config">
                      Media config apply to slots available
                    </Label>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>HDDs use separate servers ?</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Checkbox id="radiobutton-separate-hdd-config" />
                    <Label htmlFor="radiobutton-separate-hdd-config">
                      Separate servers for HDD
                    </Label>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Checkbox id="radiobutton-nonseparate-media-config" />
                    <Label htmlFor="radiobutton-nonseparate-media-config">
                      Mix HDD and flash on servers
                    </Label>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  SSD with dedicated but combined RocksDB/WAL use separate servers ?
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Checkbox id="radiobutton-separate-nvmetype5-config" />
                    <Label htmlFor="radiobutton-separate-nvmetype5-config">
                      Use separate servers
                    </Label>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Checkbox id="radiobutton-nonseparate-nvmetype5-config" />
                    <Label htmlFor="radiobutton-nonseparate-nvmetype5-config">
                      Use same servers
                    </Label>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  SSD with dedicated RocksDB/WAL and dedicated WAL or NVMe with dedicated WAL use
                  separate servers ?
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Checkbox id="radiobutton-separate-nvmetype3-config" />
                    <Label htmlFor="radiobutton-separate-nvmetype3-config">
                      Use separate servers
                    </Label>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Checkbox id="radiobutton-nonseparate-nvmetype3-config" />
                    <Label htmlFor="radiobutton-nonseparate-nvmetype3-config">
                      Use same servers
                    </Label>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold">Load configurations</h2>
            <div className="flex gap-4">
              <ChassisConfigForm />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
