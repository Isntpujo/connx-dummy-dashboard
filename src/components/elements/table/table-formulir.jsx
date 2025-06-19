const TableFormulir = () => {
  return (
    <div className="bg-white border border-zinc-300 rounded-xl">
      <table className="table-fixed w-full">
        <thead>
          <tr className="*:text-black *:font-bold *:text-xs *:p-6 border-b border-zinc-300">
            <th>Pertanyaan</th>
            <th>Wajib Diisi</th>
            <th>Hapus</th>
          </tr>
        </thead>
        <tbody className="table-fixed w-full text-center">
          <tr className="*:text-black *:text-xs *:p-6 border-b border-zinc-300">
            <td>First Name</td>
            <td>
              <label className="flex relative items-center justify-center group hover:cursor-pointer">
                <input id="checkbox" type="checkbox" className="group-hover:cursor-pointer group-hover:bg-gray-400 peer appearance-none bg-gray-300 checked:bg-green-600 rounded-md w-5 h-5" />
                <svg className="absolute w-3 h-3 group-hover:cursor-pointer invisible peer-checked:visible fill-white" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.33615 7.30113L11.647 1L14 3.34943L5.33615 12L0 6.67203L2.35304 4.3226L5.33615 7.30113Z" />
                </svg>
              </label>
            </td>
            <td className="flex items-center justify-center">
              <svg className="hover:cursor-pointer rounded-full w-5 h-5" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" fill="#FFE1EA" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.7854 14.2859L5.71387 7.21439L7.21396 5.71429L14.2855 12.7858L12.7854 14.2859Z" fill="#ED1859" />
                <path fillRule="evenodd" clipRule="evenodd" d="M5.71388 12.7858L12.7854 5.71429L14.2855 7.21439L7.21397 14.2859L5.71388 12.7858Z" fill="#ED1859" />
              </svg>
            </td>
          </tr>
          <tr className="*:text-black *:text-xs *:p-6 border-b border-zinc-300">
            <td>Last Name</td>
            <td>
              <label className="flex relative items-center justify-center group hover:cursor-pointer">
                <input id="checkbox" type="checkbox" className="group-hover:cursor-pointer group-hover:bg-gray-400 peer appearance-none bg-gray-300 checked:bg-green-600 rounded-md w-5 h-5" />
                <svg className="absolute w-3 h-3 group-hover:cursor-pointer invisible peer-checked:visible fill-white" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.33615 7.30113L11.647 1L14 3.34943L5.33615 12L0 6.67203L2.35304 4.3226L5.33615 7.30113Z" />
                </svg>
              </label>
            </td>
            <td className="flex items-center justify-center">
              <svg className="hover:cursor-pointer rounded-full w-5 h-5" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" fill="#FFE1EA" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.7854 14.2859L5.71387 7.21439L7.21396 5.71429L14.2855 12.7858L12.7854 14.2859Z" fill="#ED1859" />
                <path fillRule="evenodd" clipRule="evenodd" d="M5.71388 12.7858L12.7854 5.71429L14.2855 7.21439L7.21397 14.2859L5.71388 12.7858Z" fill="#ED1859" />
              </svg>
            </td>
          </tr>
          <tr className="*:text-black *:text-xs *:p-6 border-b border-zinc-300">
            <td>Email</td>
            <td>
              <label className="flex relative items-center justify-center group hover:cursor-pointer">
                <input id="checkbox" type="checkbox" className="group-hover:cursor-pointer group-hover:bg-gray-400 peer appearance-none bg-gray-300 checked:bg-green-600 rounded-md w-5 h-5" />
                <svg className="absolute w-3 h-3 group-hover:cursor-pointer invisible peer-checked:visible fill-white" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.33615 7.30113L11.647 1L14 3.34943L5.33615 12L0 6.67203L2.35304 4.3226L5.33615 7.30113Z" />
                </svg>
              </label>
            </td>
            <td className="flex items-center justify-center">
              <svg className="hover:cursor-pointer rounded-full w-5 h-5" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" fill="#FFE1EA" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.7854 14.2859L5.71387 7.21439L7.21396 5.71429L14.2855 12.7858L12.7854 14.2859Z" fill="#ED1859" />
                <path fillRule="evenodd" clipRule="evenodd" d="M5.71388 12.7858L12.7854 5.71429L14.2855 7.21439L7.21397 14.2859L5.71388 12.7858Z" fill="#ED1859" />
              </svg>
            </td>
          </tr>
          <tr className="*:text-black *:text-xs *:p-6 border-b border-zinc-300">
            <td>No. HP (Whatsapp Aktif)</td>
            <td>
              <label className="flex relative items-center justify-center group hover:cursor-pointer">
                <input id="checkbox" type="checkbox" className="group-hover:cursor-pointer group-hover:bg-gray-400 peer appearance-none bg-gray-300 checked:bg-green-600 rounded-md w-5 h-5" />
                <svg className="absolute w-3 h-3 group-hover:cursor-pointer invisible peer-checked:visible fill-white" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.33615 7.30113L11.647 1L14 3.34943L5.33615 12L0 6.67203L2.35304 4.3226L5.33615 7.30113Z" />
                </svg>
              </label>
            </td>
            <td className="flex items-center justify-center">
              <svg className="hover:cursor-pointer rounded-full w-5 h-5" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" fill="#FFE1EA" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.7854 14.2859L5.71387 7.21439L7.21396 5.71429L14.2855 12.7858L12.7854 14.2859Z" fill="#ED1859" />
                <path fillRule="evenodd" clipRule="evenodd" d="M5.71388 12.7858L12.7854 5.71429L14.2855 7.21439L7.21397 14.2859L5.71388 12.7858Z" fill="#ED1859" />
              </svg>
            </td>
          </tr>
          <tr className="*:text-black *:text-xs *:p-6 border-b border-zinc-300">
            <td>Gender</td>
            <td>
              <label className="flex relative items-center justify-center group hover:cursor-pointer">
                <input id="checkbox" type="checkbox" className="group-hover:cursor-pointer group-hover:bg-gray-400 peer appearance-none bg-gray-300 checked:bg-green-600 rounded-md w-5 h-5" />
                <svg className="absolute w-3 h-3 group-hover:cursor-pointer invisible peer-checked:visible fill-white" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.33615 7.30113L11.647 1L14 3.34943L5.33615 12L0 6.67203L2.35304 4.3226L5.33615 7.30113Z" />
                </svg>
              </label>
            </td>
            <td className="flex items-center justify-center">
              <svg className="hover:cursor-pointer rounded-full w-5 h-5" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" fill="#FFE1EA" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.7854 14.2859L5.71387 7.21439L7.21396 5.71429L14.2855 12.7858L12.7854 14.2859Z" fill="#ED1859" />
                <path fillRule="evenodd" clipRule="evenodd" d="M5.71388 12.7858L12.7854 5.71429L14.2855 7.21439L7.21397 14.2859L5.71388 12.7858Z" fill="#ED1859" />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableFormulir;
