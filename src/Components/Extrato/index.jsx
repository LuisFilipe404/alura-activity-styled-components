import React from "react";
import { Box, Btn } from "../UI";
import { extratoLista } from "../../info"
import Itens from "../Itens";

const Extrato = () => {
    return (
        <Box>
            {
                extratoLista.updates.map(({id, type, from, value, date}) => {
                    return (
                        <Itens key={id} type={type} from={from} value={value} date={date}/>
                    )
                })
            }

            <Btn>Ver Mais</Btn>
        </Box>
    )
}

export default Extrato