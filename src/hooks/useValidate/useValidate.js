import { useState, useEffect, useCallback } from "react"

export function useValidate({name, lastname, focus}) {
    const [validatedName, setValidated] =  useState(false)
    console.log(name)
    

    const validator =  useCallback((value) => {
        if(!focus) {
            setValidated(true)
        } else if(focus && value !== '') {
            setValidated(true)
        }   
        else {
            setValidated(false)
        }
    }, [focus])
    

    useEffect(() => {
        validator(name)
    }, [name,validator]);

    return {validatedName}
}

export function useValidateLast({lastname, focusLast}) {
    const [validatedLastName, setValidated] =  useState(false)

    

    const validator =  useCallback((value) => {
    
        if(!focusLast) {
            setValidated(true)
        } else if(focusLast && value !== '') {
            setValidated(true)
        }   
        else {
            setValidated(false)
        }
    }, [focusLast])
    

    useEffect(() => {
        validator(lastname)
    }, [ lastname, validator]);

    return {validatedLastName}
    
}



export function useValidateId({Idnum, focusId}) {
    const [validatedID, setValidated] =  useState(false)


    const validator =  useCallback((value) => {
        if(!focusId) {
            setValidated(true)
        } else if(focusId && value.length > 11) {
            setValidated(true)
        }   
        else {
            setValidated(false)
        }
    }, [focusId])
    

    useEffect(() => {
        validator(Idnum)
    }, [ Idnum, validator]);

    return {validatedID}
    
}
