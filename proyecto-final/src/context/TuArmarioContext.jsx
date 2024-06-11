import { createContext, useState, useEffect } from "react";

export const TuArmarioContext = createContext();

const TuArmarioProvider = ({children}) => {
    const [carro, setCarro] = useState([]);
    const [armario, setArmario] = useState([]);

    useEffect(() => {
        consultarApi();
    }, [])

    //se agrega otro const de la eliminacion de los contenidos del carro

    //LINK DE API
    const consultarApi = async () => {
        const url = "";
        try {
            const res = await fetch(url);
            const data = await res.json(); 
            setArmario(data);
            console.log("Productos cargados: ", data);
        }catch (error) {
            console.log("Error al cargar productos: ", error);
        }
    };

    //const de agregarAlCarro;

    return(
        <TuArmarioContext.Provider>
        </TuArmarioContext.Provider>
    );
}

export default TuArmarioProvider;