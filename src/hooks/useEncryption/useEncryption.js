import  CryptoJS  from "crypto-js"
import { useEffect, useState } from "react"


export function useEncrypt(text, password) {
    // const [key, setKey] = useState("")
    // const [iv, setIv] = useState("")
    const [encrypted, setEncrypted] = useState("")

    useEffect(() => {
        
        const encrypt =  (text) => {
            const encrypted = CryptoJS.AES.encrypt(text, password).toString()
            setEncrypted(encrypted)
        }
        if(text) {
            encrypt(text)
        }
    }, [password, text])

    return {
        encrypted,
    }
}

export  function useDecrypt(text, password) {
    // const [key, setKey] = useState("")
    // const [iv, setIv] = useState("")
    const [decrypted, setDecrypted] = useState("")

    useEffect(() => {
        const decrypt = (text) => {
            const decrypted = CryptoJS.AES.decrypt(text, password)
            const originalText = decrypted.toString(CryptoJS.enc.Utf8);
            setDecrypted(originalText)
        }

        if(text) {
            decrypt(text)
        }
    }, [password, text])


    return {
        decrypted
    }
}