/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Carousel} from "primereact/carousel";
import {Button} from "primereact/button";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    "id": "1000",
                    "code": "f230fh0g3",
                    "name": "Bamboo Watch",
                    "description": "Product Description",
                    "image": "bamboo-watch.jpg",
                    "price": 65,
                    "category": "Accessories",
                    "quantity": 24,
                    "inventoryStatus": "INSTOCK",
                    "rating": 5
                },
                {
                    "id": "1001",
                    "code": "nvklal433",
                    "name": "Black Watch",
                    "description": "Product Description",
                    "image": "black-watch.jpg",
                    "price": 72,
                    "category": "Accessories",
                    "quantity": 61,
                    "inventoryStatus": "INSTOCK",
                    "rating": 4
                },
                {
                    "id": "1002",
                    "code": "zz21cz3c1",
                    "name": "Blue Band",
                    "description": "Product Description",
                    "image": "blue-band.jpg",
                    "price": 79,
                    "category": "Fitness",
                    "quantity": 2,
                    "inventoryStatus": "LOWSTOCK",
                    "rating": 3
                },
                {
                    "id": "1003",
                    "code": "244wgerg2",
                    "name": "Blue T-Shirt",
                    "description": "Product Description",
                    "image": "blue-t-shirt.jpg",
                    "price": 29,
                    "category": "Clothing",
                    "quantity": 25,
                    "inventoryStatus": "INSTOCK",
                    "rating": 5
                },
                {
                    "id": "1004",
                    "code": "h456wer53",
                    "name": "Bracelet",
                    "description": "Product Description",
                    "image": "bracelet.jpg",
                    "price": 15,
                    "category": "Accessories",
                    "quantity": 73,
                    "inventoryStatus": "INSTOCK",
                    "rating": 4
                },
                {
                    "id": "1005",
                    "code": "av2231fwg",
                    "name": "Brown Purse",
                    "description": "Product Description",
                    "image": "brown-purse.jpg",
                    "price": 120,
                    "category": "Accessories",
                    "quantity": 0,
                    "inventoryStatus": "OUTOFSTOCK",
                    "rating": 4
                },
                {
                    "id": "1006",
                    "code": "bib36pfvm",
                    "name": "Chakra Bracelet",
                    "description": "Product Description",
                    "image": "chakra-bracelet.jpg",
                    "price": 32,
                    "category": "Accessories",
                    "quantity": 5,
                    "inventoryStatus": "LOWSTOCK",
                    "rating": 3
                },
                {
                    "id": "1007",
                    "code": "mbvjkgip5",
                    "name": "Galaxy Earrings",
                    "description": "Product Description",
                    "image": "galaxy-earrings.jpg",
                    "price": 34,
                    "category": "Accessories",
                    "quantity": 23,
                    "inventoryStatus": "INSTOCK",
                    "rating": 5
                },
                {
                    "id": "1008",
                    "code": "vbb124btr",
                    "name": "Game Controller",
                    "description": "Product Description",
                    "image": "game-controller.jpg",
                    "price": 99,
                    "category": "Electronics",
                    "quantity": 2,
                    "inventoryStatus": "LOWSTOCK",
                    "rating": 4
                },
                {
                    "id": "1009",
                    "code": "cm230f032",
                    "name": "Gaming Set",
                    "description": "Product Description",
                    "image": "gaming-set.jpg",
                    "price": 299,
                    "category": "Electronics",
                    "quantity": 63,
                    "inventoryStatus": "INSTOCK",
                    "rating": 3
                }
            ]
        };
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '600px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '480px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    productTemplate(product) {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3">
                        <img src={`${product.picture}`}
                             onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                             alt={product.name} className="product-image"/>
                    </div>
                    <div>
                        <h4 className="p-mb-1">{product.name}</h4>
                        <h6 className="p-mt-0 p-mb-3">${product.price}</h6>
                        {/*<span
                            className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>{product.inventoryStatus}</span>*/}
                    </div>
                </div>
            </div>
        );
    }

    tagTemplate = (rowData) => {

        const tags = rowData.tags.map((tag) =>
            <li key={tag.toString()}>
                {tag}
            </li>
        );

        return (<>
            <ul>{tags}</ul>
        </>);
    }

    imageTemplate = (rowData) => {
        return <img src={`${rowData.picture}`}
                    onError={(e) => e.target.src = `${rowData.picture}`}
                    alt={rowData.picture} className="product-image"/>;
    }

    paintProduct = () => {
        if (this.props.product) {
            return <>
                <div className="datatable-templating-demo">
                    <div className="card">
                        <DataTable value={[this.props.product]} header={"Selected Product Description"}>
                            <Column field={"name"} header={"Name"}></Column>
                            <Column field={"about"} header={"About"}></Column>
                            <Column field={"price"} header={"Price"}></Column>
                            <Column field={"image"} header={"Image"} body={this.imageTemplate}></Column>
                        </DataTable>
                    </div>
                </div>
            </>;
        }
    }

    paintCarousel = () => {
        if (!this.props.product) {
            return <>
                <div className="carousel-demo">
                    <Carousel value={this.props.products} numVisible={3} numScroll={3}
                              responsiveOptions={this.responsiveOptions}
                              itemTemplate={this.productTemplate} header={<h2>Gallery</h2>}/>
                </div>
            </>;
        }
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof Home
     */
    render() {
        return (
            <section id="home">
                <div className="content">
                    {/*<p>ELC Coding Test...</p>*/}
                    {this.paintProduct()}
                    {this.paintCarousel()}
                </div>
            </section>
        );
    }


}

// Export out the React Component
module.exports = Home;