class database
{
    getproducts = async () => {
        const  data = await fetch("http://localhost:3000/api/v1/database/get-products", {
            method:'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        const products = await data.json();
        console.log(products["products"])
    }
}

export default database