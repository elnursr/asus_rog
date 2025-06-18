export async function getDataAysnc(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

export function getDataFetch(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => data)
}