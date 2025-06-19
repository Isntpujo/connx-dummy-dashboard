import Button from "../button";

const TableTransaction = () => {
  return (
    <div className="bg-white rounded-xl">
      <div className="flex w-full justify-between items-center p-6 border-b border-zinc-300">
        <div className="flex gap-3 items-center">
          <svg className="bg-gray-100 rounded-lg w-9 h-9 relative overflow-visible" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              className="fill-zinc-500"
              d="M18.667 15.3334C19.7737 15.3334 20.6603 14.44 20.6603 13.3334C20.6603 12.2267 19.7737 11.3334 18.667 11.3334C17.5603 11.3334 16.667 12.2267 16.667 13.3334C16.667 14.44 17.5603 15.3334 18.667 15.3334ZM13.3337 15.3334C14.4403 15.3334 15.327 14.44 15.327 13.3334C15.327 12.2267 14.4403 11.3334 13.3337 11.3334C12.227 11.3334 11.3337 12.2267 11.3337 13.3334C11.3337 14.44 12.227 15.3334 13.3337 15.3334ZM13.3337 16.6667C11.7803 16.6667 8.66699 17.4467 8.66699 19V20C8.66699 20.3667 8.96699 20.6667 9.33366 20.6667H17.3337C17.7003 20.6667 18.0003 20.3667 18.0003 20V19C18.0003 17.4467 14.887 16.6667 13.3337 16.6667ZM18.667 16.6667C18.4737 16.6667 18.2537 16.68 18.0203 16.7C18.0337 16.7067 18.0403 16.72 18.047 16.7267C18.807 17.28 19.3337 18.02 19.3337 19V20C19.3337 20.2334 19.287 20.46 19.2137 20.6667H22.667C23.0337 20.6667 23.3337 20.3667 23.3337 20V19C23.3337 17.4467 20.2203 16.6667 18.667 16.6667Z"
              fill=""
            />
          </svg>
          <div className="flex flex-col items-start justify-start relative">
            <div className="text-black text-sm font-bold">Daftar Transaksi</div>
            <div className="text-zinc-600 text-xs">7.856 total ticket terproses</div>
          </div>
        </div>
        <Button color="disable" size="sm">
          Lihat Detail
          <svg className="fill-gray-500 w-3 h-3" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.14968 2.85001C7.10332 2.89626 7.06655 2.95121 7.04146 3.01169C7.01637 3.07218 7.00345 3.13702 7.00345 3.20251C7.00345 3.26799 7.01637 3.33283 7.04146 3.39332C7.06655 3.4538 7.10332 3.50875 7.14968 3.55501L9.08468 5.50001L1.49968 5.50001C1.22468 5.50001 0.999676 5.72501 0.999676 6.00001C0.999676 6.27501 1.22468 6.50001 1.49968 6.50001L9.08468 6.50001L7.14468 8.44001C7.05119 8.53349 6.99867 8.66029 6.99867 8.79251C6.99867 8.92472 7.05119 9.05152 7.14468 9.14501C7.23817 9.23849 7.36496 9.29102 7.49718 9.29102C7.62939 9.29102 7.75619 9.23849 7.84968 9.14501L10.6497 6.35001C10.696 6.30375 10.7328 6.2488 10.7579 6.18832C10.783 6.12783 10.7959 6.06299 10.7959 5.99751C10.7959 5.93202 10.783 5.86718 10.7579 5.80669C10.7328 5.74621 10.696 5.69126 10.6497 5.64501L7.85468 2.85001C7.65968 2.66001 7.33968 2.66001 7.14968 2.85001Z"
              fill=""
            />
          </svg>
        </Button>
      </div>
      <table className="table-fixed w-full text-left">
        <thead>
          <tr className="*:text-black *:font-bold *:text-xs *:p-6 border-b border-zinc-300">
            <th>Nama</th>
            <th>Tanggal</th>
            <th>Jumlah</th>
            <th>Status</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          <tr className="*:text-black *:text-xs *:p-6 border-b border-zinc-300">
            <td>Rizky Amarudin</td>
            <td>Jan 21, 2023</td>
            <td>3</td>
            <td>
              <div className="bg-green-200 py-1 px-2 text-green-800 font-semibold w-fit rounded-full">Sudah Bayar</div>
            </td>
            <td>OTW Festival</td>
          </tr>
          <tr className="*:text-black *:text-xs *:p-6 border-b border-zinc-300">
            <td>Rizky Amarudin</td>
            <td>Jan 21, 2023</td>
            <td>3</td>
            <td>
              <div className="bg-green-200 py-1 px-2 text-green-800 font-semibold w-fit rounded-full">Sudah Bayar</div>
            </td>
            <td>OTW Festival</td>
          </tr>
          <tr className="*:text-black *:text-xs *:p-6 border-b border-zinc-300">
            <td>Rizky Amarudin</td>
            <td>Jan 21, 2023</td>
            <td>3</td>
            <td>
              <div className="bg-green-200 py-1 px-2 text-green-800 font-semibold w-fit rounded-full">Sudah Bayar</div>
            </td>
            <td>OTW Festival</td>
          </tr>
          <tr className="*:text-black *:text-xs *:p-6 border-b border-zinc-300">
            <td>Rizky Amarudin</td>
            <td>Jan 21, 2023</td>
            <td>3</td>
            <td>
              <div className="bg-green-200 py-1 px-2 text-green-800 font-semibold w-fit rounded-full">Sudah Bayar</div>
            </td>
            <td>OTW Festival</td>
          </tr>
          <tr className="*:text-black *:text-xs *:p-6 border-b border-zinc-300">
            <td>Rizky Amarudin</td>
            <td>Jan 21, 2023</td>
            <td>3</td>
            <td>
              <div className="bg-green-200 py-1 px-2 text-green-800 font-semibold w-fit rounded-full">Sudah Bayar</div>
            </td>
            <td>OTW Festival</td>
          </tr>
          <tr className="*:text-black *:text-xs *:p-6 border-b border-zinc-300">
            <td>Rizky Amarudin</td>
            <td>Jan 21, 2023</td>
            <td>3</td>
            <td>
              <div className="bg-green-200 py-1 px-2 text-green-800 font-semibold w-fit rounded-full">Sudah Bayar</div>
            </td>
            <td>OTW Festival</td>
          </tr>
          <tr className="*:text-black *:text-xs *:p-6 border-b border-zinc-300">
            <td>Rizky Amarudin</td>
            <td>Jan 21, 2023</td>
            <td>3</td>
            <td>
              <div className="bg-green-200 py-1 px-2 text-green-800 font-semibold w-fit rounded-full">Sudah Bayar</div>
            </td>
            <td>OTW Festival</td>
          </tr>
          <tr className="*:text-black *:text-xs *:p-6 border-b border-zinc-300">
            <td>Rizky Amarudin</td>
            <td>Jan 21, 2023</td>
            <td>3</td>
            <td>
              <div className="bg-green-200 py-1 px-2 text-green-800 font-semibold w-fit rounded-full">Sudah Bayar</div>
            </td>
            <td>OTW Festival</td>
          </tr>
          <tr className="*:text-black *:text-xs *:p-6 border-b border-zinc-300">
            <td>Rizky Amarudin</td>
            <td>Jan 21, 2023</td>
            <td>3</td>
            <td>
              <div className="bg-green-200 py-1 px-2 text-green-800 font-semibold w-fit rounded-full">Sudah Bayar</div>
            </td>
            <td>OTW Festival</td>
          </tr>
          <tr className="*:text-black *:text-xs *:p-6">
            <td>Rizky Amarudin</td>
            <td>Jan 21, 2023</td>
            <td>3</td>
            <td>
              <div className="bg-green-200 py-1 px-2 text-green-800 font-semibold w-fit rounded-full">Sudah Bayar</div>
            </td>
            <td>OTW Festival</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableTransaction;
