const apiRoot = "http://127.0.0.1:3000/";   // TODO: fix when deploying

export async function post(endpoint:string, body:string) {
    let req = await fetch(apiRoot + endpoint, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: body
    });

    if(!req.ok || req.status != 200) return null;

    return await req.json();
}

export async function get(endpoint:string, params:string) {
    let req = await fetch(apiRoot + endpoint + "/" + params, {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    });

    if(!req.ok || req.status != 200) return null;
    return await req.json();
}
