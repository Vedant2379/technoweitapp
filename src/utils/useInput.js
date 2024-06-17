import { useState } from "react";

export const useInput = initialValues=>{
    const [value, setValue] = useState(initialValues);

    return{
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value)
            }
        }
    }

} 