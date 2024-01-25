import React, { useState } from "react";
import Array from "./Array";

const ArrayPrint = () => {
    const [data] = useState(Array)
    return (
        <>
            {
                data.map((elem) => {
                    const { id, name, status } = elem
                    return (
                        <h5>{`Id Is ${id} Name Is ${name} Status Is ${status}`}</h5>
                    )
                })
            }
        </>
    )
}
export default ArrayPrint;