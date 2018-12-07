

export const getMediumPosts = () => {
    const endpoint = `https://medium.com/${process.env.MEDIUM_USERNAME}/latest?format=json&limit=${2}`
    
    fetch(endpoint)
        .then((res)=>{
            console.log(res)
        })

    return "derp"
}

export const getBehancePosts = () => {
    return "derp"
}