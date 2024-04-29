const buildApiRoot = "/api/";
const devApiRoot = "/";

function dev() {
    if(!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        return true;
    } else {
        return false;
    }
}

export async function post(endpoint:string, body:string) {
    let apiRoot:string;
    if(dev()) apiRoot = devApiRoot;
    else apiRoot = buildApiRoot;
    
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
    let apiRoot:string;
    if(dev()) apiRoot = devApiRoot;
    else apiRoot = buildApiRoot;

    let req = await fetch(apiRoot + endpoint + "/" + params, {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    });

    if(!req.ok || req.status != 200) return null;
    return await req.json();
}
