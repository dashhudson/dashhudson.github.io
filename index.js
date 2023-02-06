const env = { dev: 'DEV', prod: 'PROD' }

const pageConfig = [
    {
        type: 'LikeShop Embed',
        tests: [],
    },
    {
        type: 'LikeShop Carousel',
        tests: [],
    },
    {
        type: 'Gallery Embed',
        tests: [],
    },
    {
        type: 'Gallery Carousel',
        tests: [
            { name: 'Base', env: env.dev, url: '/spirit-galleries/gallery-carousel/dev.html'},
            { name: 'Override', env: env.dev, url: '/spirit-galleries/gallery-carousel/dev-override.html'},
            { name: 'Base', env: env.prod, url: '/spirit-galleries/gallery-carousel/prod.html'},
            { name: 'Override', env: env.prod, url: '/spirit-galleries/gallery-carousel/prod-override.html'},
        ],
    },
    {
        type: 'Product Carousel',
        tests: [
            { name: 'Base', env: env.dev, url: '/spirit-galleries/product-carousel/dev.htm'},
            { name: 'Override', env: env.dev, url: '/spirit-galleries/product-carousel/dev-override.html'},
            { name: 'Base', env: env.prod, url: '/spirit-galleries/product-carousel/prod.html'},
            { name: 'Override', env: env.prod, url: '/spirit-galleries/product-carousel/prod-override.html'},
        ],
    },
]

function renderRow(elList, name, href) {
    if (!href) return
    const elItem = document.createElement('li')
    const elAnchor = document.createElement('a')
    elAnchor.innerText = name
    elAnchor.href = href
    elItem.appendChild(elAnchor)
    elList.appendChild(elItem)
}

function renderTableRows() {
    const table = document.getElementById('index')
    pageConfig.forEach((page) => {
        page.tests?.forEach((test) => {
            renderRow(table, `${page.type} - ${test.name} - ${test.env}`, test.url)
        })
    })
}

document.addEventListener("DOMContentLoaded", renderTableRows);
