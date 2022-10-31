import { useEffect, useState } from "react"

export default function useError(init) {
    const [showPopup, setShowPopup] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (init) {
            setMessage(init.message)
            setShowPopup(init.showPopup)
        }
    }, [])

    const setError = (state) => {
        setShowPopup(state.showPopup)
        setMessage(state.message)
    }

    return [{ showPopup, message }, setError]
}