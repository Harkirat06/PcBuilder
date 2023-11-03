import axios from 'axios'



export async function buildPorPrecio(precio, segundaMano){
    const response = await axios.get("/api/builder/precio",{
        params: {
            precio,
            segundaMano
        }
    })
    const {data} = response
    return response

}
export async function buildPorGama(gama){
        const response = await axios.get("/api/builder/gama",{
            params: {
                gama
            }
        })
        const {data} = response
        return data

}


export async function getListas(config = {}){
    const response = await axios.get("/api/pcbuilder",
    {
        params: config
    }
    )
    return response
}

export async function deleteFiles(path, token) {
    return axios.delete("/delete", {
        headers: {"Authorization" : `Bearer ${token}`},
        params: {
            path: path
        }
    })
}

export async function registerUser(user) {
    const res = await axios.post("/users", user).catch((e) => {
        const { response } = e
        return response
    })
    return res
}

export async function registerImage(image) {
    console.log(image)
    const formData = new FormData();
    formData.append("docs", image);
    const res = await axios.post("/image", formData).catch((e) => {
        const { response } = e
        return response
    })
    console.log(res)
    return res
}

export async function loginUser(user) {
    const res = await axios.post("/login", user).catch((e) => {
        const { response } = e
        return response
    })
    return res
}


