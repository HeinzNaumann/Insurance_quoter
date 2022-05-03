import { createContext, useState } from "react";
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formaterarDinero } from "../helpers";
const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: "",
    });

    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(false)
    const [resultado, setResultado] = useState(0)
    const handelChangeDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    };

    const cotizarSeguro = () => {
        // Una Base
        let resultado = 2000;
        //Obtener difrencia de años
        const diferencia = obtenerDiferenciaYear(datos.year);
        // Hay que restar el 3% por cada año
        resultado -= ((diferencia * 3) * resultado) / 100;

        //Europeo 30%
        // Americano 15%
        //Asiatico 5%
        resultado *= calcularMarca(datos.marca)

        //Basico 20%
        // Completo 50%
        resultado *= calcularPlan(datos.plan)

        resultado = formaterarDinero(resultado)

        setCargando(true)

        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000)




    };
    return (
        <CotizadorContext.Provider
            value={{ datos, handelChangeDatos, setError, error, cotizarSeguro, resultado, cargando }}
        >
            {children}
        </CotizadorContext.Provider>
    );
};

export { CotizadorProvider };

export default CotizadorContext;
