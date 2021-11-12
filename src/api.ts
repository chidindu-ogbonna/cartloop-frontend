export async function sendMessageToApi(message: string): Promise<any> {
    const baseURL = process.env.REACT_APP_API_ENDPOINT
    const response = await window.fetch(`${baseURL}api/chats/`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            conversation_id: '1',
            user_id: '1',
            payload: message,
        }),
    })


    type JSONResponse = {
        data?: Object,
        errors?: { message: string }
    }

    const { data, errors }: JSONResponse = await response.json()
    if (response.ok) {
        return data
    } else {
        const error = new Error(errors?.message)
        return Promise.reject(error)
    }
}
