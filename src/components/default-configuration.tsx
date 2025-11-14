import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ChassisConfigOptions } from './chassis-configuration-options';

export const DefaultConfiguration = () => {
  const [check1, setCheck1] = useState<boolean>(true);
  const [check2, setCheck2] = useState<boolean>(true);
  const [check3, setCheck3] = useState<boolean>(true);
  const [check4, setCheck4] = useState<boolean>(true);
  const [check5, setCheck5] = useState<boolean>(true);
  const [check6, setCheck6] = useState<boolean>(true);

  return (
    <div>
      <div>
        <Accordion type="multiple">
          <AccordionItem className="px-4" value="item-1-1">
            <AccordionTrigger className="text-xl">Configuration</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold">Global configuration</h3>
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Descriptions</TableHead>
                      <TableHead>Options #1</TableHead>
                      <TableHead>Options #2</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>All servers have the same NIC, cores & mem in config ?</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Checkbox
                            className="cursor-pointer"
                            onClick={() => setCheck1(true)}
                            checked={check1 == true}
                            id="radiobutton-similar-config"
                          />
                          <Label htmlFor="radiobutton-similar-config">Same config</Label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Checkbox
                            className="cursor-pointer"
                            onClick={() => setCheck1(false)}
                            checked={check1 == false}
                            id="radiobutton-dissimilar-config"
                          />
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
                          <Checkbox
                            className="cursor-pointer"
                            onClick={() => setCheck2(true)}
                            checked={check2 == true}
                            id="radiobutton-similar-media-config"
                          />
                          <Label htmlFor="radiobutton-similar-media-config">Same config</Label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Checkbox
                            className="cursor-pointer"
                            onClick={() => setCheck2(false)}
                            checked={check2 == false}
                            id="radiobutton-dissimilar-media-config"
                          />
                          <Label htmlFor="radiobutton-dissimilar-media-config">
                            Similar config
                          </Label>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        All servers have the exactly the same number and types of media in config ?
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Checkbox
                            className="cursor-pointer"
                            onClick={() => setCheck3(true)}
                            checked={check3 == true}
                            id="radiobutton-same-media-config"
                          />
                          <Label htmlFor="radiobutton-same-media-config">Exactly same config</Label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Checkbox
                            className="cursor-pointer"
                            onClick={() => setCheck3(false)}
                            checked={check3 == false}
                            id="radiobutton-different-media-config"
                          />
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
                          <Checkbox
                            className="cursor-pointer"
                            onClick={() => setCheck4(true)}
                            checked={check4 == true}
                            id="radiobutton-separate-hdd-config"
                          />
                          <Label htmlFor="radiobutton-separate-hdd-config">
                            Separate servers for HDD
                          </Label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Checkbox
                            className="cursor-pointer"
                            onClick={() => setCheck4(false)}
                            checked={check4 == false}
                            id="radiobutton-nonseparate-media-config"
                          />
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
                          <Checkbox
                            className="cursor-pointer"
                            onClick={() => setCheck5(true)}
                            checked={check5 == true}
                            id="radiobutton-separate-nvmetype5-config"
                          />
                          <Label htmlFor="radiobutton-separate-nvmetype5-config">
                            Use separate servers
                          </Label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Checkbox
                            className="cursor-pointer"
                            onClick={() => setCheck5(false)}
                            checked={check5 == false}
                            id="radiobutton-nonseparate-nvmetype5-config"
                          />
                          <Label htmlFor="radiobutton-nonseparate-nvmetype5-config">
                            Use same servers
                          </Label>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        SSD with dedicated RocksDB/WAL and dedicated WAL or NVMe with dedicated WAL
                        use separate servers ?
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Checkbox
                            className="cursor-pointer"
                            onClick={() => setCheck6(true)}
                            checked={check6 == true}
                            id="radiobutton-separate-nvmetype3-config"
                          />
                          <Label htmlFor="radiobutton-separate-nvmetype3-config">
                            Use separate servers
                          </Label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Checkbox
                            className="cursor-pointer"
                            onClick={() => setCheck6(false)}
                            checked={check6 == false}
                            id="radiobutton-nonseparate-nvmetype3-config"
                          />
                          <Label htmlFor="radiobutton-nonseparate-nvmetype3-config">
                            Use same servers
                          </Label>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              {/**<div className="border rounded-lg p-4">
                <div className="flex gap-4">
                  <ImportChassisConfigForm />
                  <ImportChassisConfigForm />
                </div>
              </div>**/}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Chassis configurations</h3>
                <ChassisConfigOptions />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
