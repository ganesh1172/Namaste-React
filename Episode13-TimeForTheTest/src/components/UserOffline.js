const UserOffline = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img
        className="w-fit mx-auto"
        src={CheckConnection}
        alt="Internet connection"
      />
      <h1 className="text-xl font-semibold text-red-400 text-center">
        Looks like you're offline!! Please check your internet connection;
      </h1>
    </div>
  );
};

export default UserOffline;
