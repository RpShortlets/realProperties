import { useEffect, useState } from 'react';

export const Capitalize = (name) => {
    const [usedName, setUsedName] = useState();

    useEffect(() => {
        if(name) {
            let splitName = name?.split(' ');
            for (var i = 0; i < splitName?.length; i++) {
                splitName[i] = splitName[i]?.charAt(0)?.toUpperCase() + splitName[i]?.slice(1);
                setUsedName(splitName?.join(" "))
            }
        }
        
    }, [name]);

    return {usedName};    
}
