import useOnline from '../../../hooks/useOnline';

const UserConnectionStatus = () => {
  const isOnline = useOnline();

  return <div>{isOnline ? null : <div className="p-2 z-50 text-xs text-white w-full text-center bg-orange-400">Your Connection Is Lost, You Still Can Use This App But Do Not Close This App Till Your Connection Back To Normal</div>}</div>;
};

export default UserConnectionStatus;
