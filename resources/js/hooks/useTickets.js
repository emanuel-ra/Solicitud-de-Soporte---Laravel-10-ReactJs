import { useState, useCallback } from 'react'
import { createTicket } from '../services/RequestSupportService'
export function useTickets(){

    const [loading, setLoading] = useState(false)
    // el error no se usa pero puedes implementarlo
    // si quieres:
    const [, setError] = useState(null)

    const postTicket = useCallback(async () => {
        try {
          setLoading(true)
          setError(null)
          const ticket = await createTicket({ search })
        } catch (e) {
          setError(e.message)
        } finally {
          setLoading(false)
        }
    }, [])

    return { postTicket,loading }
}