import { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";
const Formulario = () => {
  const { datos, handelChangeDatos } = useCotizador();

  return (
    <>
      <form action="">
        <div className="my-5">
          <label
            htmlFor=""
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handelChangeDatos(e)}
            value={datos.marca}
          >
            <option value="">-- Seleccionar Marca --</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            htmlFor=""
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Año
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handelChangeDatos(e)}
            value={datos.year}
          >
            <option value="">-- Seleccionar Año --</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            htmlFor=""
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Elige un plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={(e) => handelChangeDatos(e)}
                ></input>
              </Fragment>
            ))}
          </div>
        </div>

        <input
          value="Cotizar"
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
        />
      </form>
    </>
  );
};

export default Formulario;
