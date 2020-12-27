const fetchWrapper = async (path, params) => {
    const response = await fetch(path, params);

    if (response.ok) {
        const data = await response.json();
        return { status: response.status, data };
    }
    throw Error;
};

export default fetchWrapper;
