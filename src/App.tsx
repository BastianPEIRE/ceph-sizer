import './App.css'
import { Button } from './components/ui/button';

function App() {

  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-4'>
      <h1 className='text-2xl font-bold'>A Ceph sizer for capacity, configuration, and subscriptions</h1>
      <table> 
        <thead>
          <tr>
            <th scope="col"> </th>
            <td></td>
            <td scope="col">
              (ignored in calculation - input only)TiB
            </td>
            <td scope="col">(used htmlFor calculation)TB</td>
          </tr>
        </thead>
        <tbody>
            <form id="general-values"> 
                <tr>
                    <td>Converter from TiB into TB: (value not applied - calulation only; only TB used in calc)</td>
                    <td>
                      <Button id="button-capacity-tib" type="submit" data-target="tib">Convert</Button>
                    </td>
                    <td width="250" align="center">
                        <input type="text" id="global-capacity-tib-input" />
                    </td>
                    <td width="250" align="center">
                        <p className="converted-capacity" id="tib"><span className="value">0</span></p>
                    </td>
                    
                </tr>
                <tr>
                    <th scope="row">All servers have the same NIC, cores & mem in config ?</th>
                    <td align="center">
                        <input type="radio" id="radiobutton-similar-config" name="global-similar-config" value="1" checked />
                        <label htmlFor="similar-config">Same config</label>
                    </td>
                    <td align="center">
                        <input type="radio" id="radiobutton-dissimilar-config" name="global-similar-config" value="0" />
                        <label htmlFor="similar-config">Different config</label>
                    </td>
                </tr>
                <tr>
                    <th scope="row">All servers have the same number and types of media htmlFor capacity in config ?</th>
                    
                    <td align="center">
                        <input type="radio" id="radiobutton-similar-media-config" name="global-similar-media-config" value="1" checked />
                        <label htmlFor="similar-media-config">Same config</label>
                    </td>
                    <td align="center">
                        <input type="radio" id="radiobutton-dissimilar-media-config" name="global-similar-media-config" value="0" />
                        <label htmlFor="similar-media-config">Similar config</label>
                    </td>
                </tr>
                <tr>
                    <th scope="row">All servers have the exactly the same number and types of media in config ?</th>
                    <td align="center">
                        <input type="radio" id="radiobutton-same-media-config" name="global-same-media-config" value="1" checked />
                        <label htmlFor="same-media-config">Exactly same config</label>
                    </td>
                    <td align="center">
                        <input type="radio" id="radiobutton-different-media-config" name="global-same-media-config" value="0" />
                        <label htmlFor="same-media-config">Media config apply to slots available</label>
                    </td>
                </tr>
                <tr>
                    <th scope="row">HDDs use separate servers ?</th>
                    <td align="center">
                        <input type="radio" id="radiobutton-separate-hdd-config" name="global-separate-hdd-config" value="1" checked />
                        <label htmlFor="separate-hdd-config">Separate servers htmlFor HDD</label>
                    </td>
                    <td align="center">
                        <input type="radio" id="radiobutton-nonseparate-media-config" name="global-separate-hdd-config" value="0" />
                        <label htmlFor="separate-hdd-config">Mix HDD and flash on servers</label>
                    </td>
                </tr>
                <tr>
                    <th scope="row">SSD with dedicated but combined RocksDB/WAL use separate servers ?</th>
                    
                    <td align="center">
                        <input type="radio" id="radiobutton-separate-nvmetype5-config" name="global-separate-nvmetype5-config" value="1" checked />
                        <label htmlFor="separate-nvmetype5-config">Use separate servers</label>
                    </td>
                    <td align="center">
                        <input type="radio" id="radiobutton-nonseparate-nvmetype5-config" name="global-separate-nvmetype5-config" value="0" />
                        <label htmlFor="separate-nvmetype5-config">Use same servers</label>
                    </td>
                </tr>
                <tr>
                    <th scope="row">SSD with dedicated RocksDB/WAL and dedicated WAL or NVMe with dedicated WAL use separate servers ?</th>
                    <td align="center">
                        <input type="radio" id="radiobutton-separate-nvmetype3-config" name="global-separate-nvmetype3-config" value="1" checked />
                        <label htmlFor="separate-nvmetype3-config">Use separate servers</label>
                    </td>
                    <td align="center">
                        <input type="radio" id="radiobutton-nonseparate-nvmetype3-config" name="global-separate-nvmetype3-config" value="0" />
                        <label htmlFor="separate-nvmetype3-config">Use same servers</label>
                    </td>
                </tr>
            </form>
        </tbody>
      </table>
      <table>
          <tbody>
              <tr>
                  <td>Chassis config file load:</td>
                  <td>
                      <input type="file" id="input-filename-chassis-config" />
                  </td>
                  <td>Workload config file load:</td>
                  <td>
                      <input type="file" id="input-filename-workload-config" />
                  </td>
              </tr>
          </tbody>
      </table>
      <table>
          <tbody>
              <tr>
                  <td style={{minWidth: "50px"}}>
                      <td><b>Error messages:</b></td>
                      <td style={{minWidth: "100px", border: "1px solid black"}}>
                          <p id="error-message" />
                      </td>
                  </td>
                  <td style={{minWidth: "50px", textAlign: "left"}}>
                      <td><b>InhtmlFormation & Warnings:</b></td>
                      <td style={{minWidth: "100px", border: "1px solid black"}}>
                      <p id="misc-message"></p>   
                  </td>
                  </td>
              </tr>
          </tbody>
      </table>
    </div>
  )
}

export default App;
