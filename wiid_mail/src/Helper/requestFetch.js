const requestFetch = async (link, method, calback, config = {}) => {
    try {
        const response = await fetch(link, {
            method,
            ...config
        });
        const data = await response.json()
        console.log(data)
        calback(data)
    } catch (error) {
        console.log(error.message)
    }
}

export default requestFetch;