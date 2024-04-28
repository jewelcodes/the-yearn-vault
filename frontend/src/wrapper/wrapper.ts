const apiRoot = "http://127.0.0.1:8000/";   // TODO: fix when deploying

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
