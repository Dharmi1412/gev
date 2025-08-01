const filterService = (products, price, range) => {
    console.log("filter product f", products, range, price)
    console.log(range, price, products)
    const result = products.filter(product => product.price <= price && product.range >= range)
    console.log("result = ", result)
    return result
}

export { filterService }