import './App.css';
import { ChassisConfigForm } from './components/forms/chassis-config.form';
import { Table } from './components/ui/table';
import { StorageUnitConverter } from './components/storage-unit-converter';
import { ThemeSelector } from './components/theme-selector';
import { DefaultConfiguration } from './components/default-configuration';

function App() {
  return (
    <div
      data-theme="dark"
      className="flex flex-col p-10 min-h-screen gap-4 dark:bg-zinc-800 dark:text-white"
    >
      <div className="absolute top-5 right-5 flex gap-4">
        <ThemeSelector />
      </div>
      <h1 className="text-2xl font-bold">
        A Ceph sizer for capacity, configuration, and subscriptions
      </h1>
      <StorageUnitConverter />
      <DefaultConfiguration />

      <form id="general-values">
        <Table>
          <tbody>
            <tr>
              <th scope="row">
                <p>All servers have the same NIC, cores & mem in config ?</p>
              </th>
              <td>
                <input
                  type="radio"
                  id="radiobutton-similar-config"
                  name="global-similar-config"
                  value="1"
                  checked
                />
                <label htmlFor="similar-config">Same config</label>
              </td>
              <td>
                <input
                  type="radio"
                  id="radiobutton-dissimilar-config"
                  name="global-similar-config"
                  value="0"
                />
                <label htmlFor="similar-config">Different config</label>
              </td>
            </tr>
            <tr>
              <th scope="row">
                All servers have the same number and types of media htmlFor capacity in config ?
              </th>

              <td>
                <input
                  type="radio"
                  id="radiobutton-similar-media-config"
                  name="global-similar-media-config"
                  value="1"
                  checked
                />
                <label htmlFor="similar-media-config">Same config</label>
              </td>
              <td>
                <input
                  type="radio"
                  id="radiobutton-dissimilar-media-config"
                  name="global-similar-media-config"
                  value="0"
                />
                <label htmlFor="similar-media-config">Similar config</label>
              </td>
            </tr>
            <tr>
              <th scope="row">
                All servers have the exactly the same number and types of media in config ?
              </th>
              <td>
                <input
                  type="radio"
                  id="radiobutton-same-media-config"
                  name="global-same-media-config"
                  value="1"
                  checked
                />
                <label htmlFor="same-media-config">Exactly same config</label>
              </td>
              <td>
                <input
                  type="radio"
                  id="radiobutton-different-media-config"
                  name="global-same-media-config"
                  value="0"
                />
                <label htmlFor="same-media-config">Media config apply to slots available</label>
              </td>
            </tr>
            <tr>
              <th scope="row">HDDs use separate servers ?</th>
              <td>
                <input
                  type="radio"
                  id="radiobutton-separate-hdd-config"
                  name="global-separate-hdd-config"
                  value="1"
                  checked
                />
                <label htmlFor="separate-hdd-config">Separate servers htmlFor HDD</label>
              </td>
              <td>
                <input
                  type="radio"
                  id="radiobutton-nonseparate-media-config"
                  name="global-separate-hdd-config"
                  value="0"
                />
                <label htmlFor="separate-hdd-config">Mix HDD and flash on servers</label>
              </td>
            </tr>
            <tr>
              <th scope="row">
                SSD with dedicated but combined RocksDB/WAL use separate servers ?
              </th>

              <td>
                <input
                  type="radio"
                  id="radiobutton-separate-nvmetype5-config"
                  name="global-separate-nvmetype5-config"
                  value="1"
                  checked
                />
                <label htmlFor="separate-nvmetype5-config">Use separate servers</label>
              </td>
              <td>
                <input
                  type="radio"
                  id="radiobutton-nonseparate-nvmetype5-config"
                  name="global-separate-nvmetype5-config"
                  value="0"
                />
                <label htmlFor="separate-nvmetype5-config">Use same servers</label>
              </td>
            </tr>
            <tr>
              <th scope="row">
                SSD with dedicated RocksDB/WAL and dedicated WAL or NVMe with dedicated WAL use
                separate servers ?
              </th>
              <td>
                <input
                  type="radio"
                  id="radiobutton-separate-nvmetype3-config"
                  name="global-separate-nvmetype3-config"
                  value="1"
                  checked
                />
                <label htmlFor="separate-nvmetype3-config">Use separate servers</label>
              </td>
              <td>
                <input
                  type="radio"
                  id="radiobutton-nonseparate-nvmetype3-config"
                  name="global-separate-nvmetype3-config"
                  value="0"
                />
                <label htmlFor="separate-nvmetype3-config">Use same servers</label>
              </td>
            </tr>
          </tbody>
        </Table>
      </form>

      <table>
        <tbody>
          <tr>
            <td style={{ minWidth: '50px' }}>
              <td>
                <b>Error messages:</b>
              </td>
              <td style={{ minWidth: '100px', border: '1px solid black' }}>
                <p id="error-message" />
              </td>
            </td>
            <td style={{ minWidth: '50px', textAlign: 'left' }}>
              <td>
                <b>InhtmlFormation & Warnings:</b>
              </td>
              <td style={{ minWidth: '100px', border: '1px solid black' }}>
                <p id="misc-message"></p>
              </td>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
