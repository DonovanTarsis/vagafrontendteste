const requestFetch = async (link, method, callback, config = {}) => {
    try {
        const response = await fetch(link, {
            method,
            ...config
        });
        const data = await response.json()
        callback(data)
    } catch (error) {
        console.log(error.message)
    }
}

export default requestFetch;