import './App.css';
import { StorageUnitConverter } from './components/storage-unit-converter';
import { ThemeSelector } from './components/theme-selector';
import { DefaultConfiguration } from './components/default-configuration';

function App() {
  return (
    <div
      data-theme="dark"
      className="flex flex-col p-10 min-h-screen gap-4 dark:bg-zinc-950 dark:text-white"
    >
      <div className="absolute top-10 right-10 flex gap-4">
        <ThemeSelector />
      </div>
      <h1 className="text-3xl font-bold">
        A Ceph sizer for capacity, configuration, and subscriptions
      </h1>
      <StorageUnitConverter />
      <DefaultConfiguration />

      <table>
        <tbody>
          <tr>
            <td>
              <td>
                <b>Error messages:</b>
              </td>
              <td>
                <p id="error-message" />
              </td>
            </td>
            <td>
              <td>
                <b>InhtmlFormation & Warnings:</b>
              </td>
              <td>
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
