import { useEffect, useState } from 'react';

export const Capitalize = (name) => {
    const [usedName, setUsedName] = useState();
    
    console.log(name)

    useEffect(() => {
        console.log('i ran')
        if(name) {
            let splitName = name?.split(' ');
            console.log('i ran name')
            for (var i = 0; i < splitName?.length; i++) {
                splitName[i] = splitName[i]?.charAt(0)?.toUpperCase() + splitName[i]?.slice(1);
                setUsedName(splitName?.join(" "))
            }
        }
        
    }, [name]);

    return {usedName};    
}
