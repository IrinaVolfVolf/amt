import {useState, useCallback} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const request = useCallback( async (url, method = 'GET', body = null, headers = {}) => {

        setLoading(true)

        try {

            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
/*                mode: 'no-cors', "Access-Control-Allow-Credentials" : true*/
            }

            const response = await fetch(url, {
                method,
                body,
                mode: 'no-cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers
            })
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Something gone wrong')
            }
            setLoading(false)
            return data

        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback( () => setError(null), [])

    return { loading, request, error, clearError }
}