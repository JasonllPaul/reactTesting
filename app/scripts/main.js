/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled separately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Home from './components/home';
import {getAllProductsData} from "./preloadData";
import regeneratorRuntime from "regenerator-runtime";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";


/**
 * We can start our initial App here in the main.js file
 */
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            product: null
        }
    }

    componentDidMount = async () => {
        let products = await getAllProductsData();
        this.setState({products: products});
    }

    setProduct = (value) => {
        this.setState({product: value});
    }

    imageTemplate = (rowData) => {
        return <img src={`${rowData.picture}`}
                    width={"80px"} height={"80px"}
                    onError={(e) => e.target.src = `${rowData.picture}`}
                    alt={rowData.picture} className="product-image"/>;
    }

    paintProducts = () => {
        return (
            <div className="datatable-templating-demo">
                <div className="card">
                    <DataTable value={this.state.products} header={"List of Products"} rows={5} paginator
                               style={{"marginTop": "45%"}}>
                        <Column field={"name"} header={"Name"}></Column>
                        <Column field={"about"} header={"About"}></Column>
                        <Column field={"price"} header={"Price"}></Column>
                        <Column field={"image"} header={"Image"} body={this.imageTemplate}></Column>
                    </DataTable>
                </div>
            </div>
        );
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof App
     */
    render() {
        return (
            <div className="App">
                {this.state.products.length > 0 ?
                    <>
                        <Menu products={this.state.products} product={this.state.product} setProduct={this.setProduct}/>
                        <Home products={this.state.products} product={this.state.product} setProduct={this.setProduct}/>
                        {this.paintProducts()}
                    </>
                    : <></>
                }
            </div>
        );
    }

}

// Render this out
ReactDOM.render(<App/>, document.getElementById('root'));
