const pageConfig = [
    {
        type: 'LikeShop Embed',
        dev: '',
        prod: '',
    },
    {
        type: 'LikeShop Carousel',
        dev: '',
        prod: '',
    },
    {
        type: 'Gallery Embed',
        dev: '',
        prod: '',
    },
    {
        type: 'Gallery Carousel',
        dev: '/spirit-galleries/gallery-carousel/dev.html',
        devOverride: '/spirit-galleries/gallery-carousel/dev-override.html',
        prod: '/spirit-galleries/gallery-carousel/prod.html',
        prodOverride: '/spirit-galleries/gallery-carousel/prod-override.html',
    },
    {
        type: 'Product Carousel',
        dev: '/spirit-galleries/product-carousel/dev.html',
        devOverride:  '/spirit-galleries/product-carousel/dev-override.html',
        prod: '/spirit-galleries/product-carousel/prod.html',
        prodOverride: '/spirit-galleries/product-carousel/prod-override.html',
    },
]

function renderRow(elTable, type, env, href) {
    if (!href) return
    const elRow = document.createElement('tr')
    const elType = document.createElement('td')
    const elEnv = document.createElement('td')
    const elAnchor = document.createElement('a')
    elType.innerText = type
    elAnchor.innerText = env
    elAnchor.href = href
    elEnv.appendChild(elAnchor)
    elRow.appendChild(elType)
    elRow.appendChild(elEnv)
    elTable.appendChild(elRow)
}

function renderTableRows() {
    const table = document.getElementById('index')
    pageConfig.forEach((page) => {
        renderRow(table, page.type, 'DEV', page.dev)
        renderRow(table, `${page.type} Override`, 'DEV', page.devOverride)
        renderRow(table, page.type, 'PROD', page.prod)
        renderRow(table, `${page.type} Override`, 'DEV', page.prodOverride)
    })
}

document.addEventListener("DOMContentLoaded", renderTableRows);
