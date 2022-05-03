import useCotizador from "../hooks/useCotizador";

const Error = () => {
  const { error } = useCotizador();
  return (
    <div className="border text-center border-red-400 bg-red-100 text-red-700 p-2">
      <p>{error}</p>
    </div>
  );
};

export default Error;
