/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from 'primereact/column';
import {Button} from "primereact/button";

class Menu extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor(props) {
        super(props);
        this.state = {
            showingSearch: false,
            filterProducts: [],
            found: false
        };
    }

    /**
     * Shows or hides the search container
     * @memberof Menu
     * @param e [Object] - the event from a click handler
     */
    showSearchContainer(e) {
        e.preventDefault();
        this.setState({
            showingSearch: !this.state.showingSearch,
            found: false
        });
    }

    /**
     * Calls upon search change
     * @memberof Menu
     * @param e [Object] - the event from a text change handler
     */
    onSearch(e) {
        // Start Here
        // ...

        const typed = e.target.value?.toLowerCase();

        const res = this.props.products.filter(p => p.name?.toString()?.toLowerCase().search(typed) > -1);
        this.setState({filterProducts: res});
    }

    setProduct = (rowData) => {
        this.props.setProduct(rowData);
        this.setState({showingSearch: false, found: true});
    }

    nameTemplate = (rowData) => {
        return (<>
            {rowData.isActive === "true" ?
                <Button label={`${rowData.name}`} className="p-button-link" onClick={() => this.setProduct(rowData)}/> :
                <p>{rowData.name}</p>
            }

        </>);
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

    isActiveTemplate = (rowData) => {
        return (<>
            {rowData.isActive === "true" ? "Available" : "Unavailable"}
        </>);
    }

    imageTemplate = (rowData) => {
        return <img src={`${rowData.picture}`}
                    width={"80px"} height={"80px"}
                    onError={(e) => e.target.src = `${rowData.picture}`}
                    alt={rowData.picture} className="product-image"/>;
    }


    paintTable = () => {
        if (!this.state.found) {
            if (this.state.filterProducts?.length > 0) {
                return (
                    <div className="datatable-templating-demo">
                        <div className="card">
                            <DataTable value={this.state.filterProducts}>
                                <Column field={"name"} header={"Name"} body={this.nameTemplate}></Column>
                                <Column header={"Tag"} body={this.tagTemplate}></Column>
                                <Column header={"Active"} body={this.isActiveTemplate}></Column>
                                <Column field={"image"} header={"Image"} body={this.imageTemplate}></Column>
                            </DataTable>
                        </div>
                    </div>
                );
            } else {
                return (<div className="datatable-templating-demo">
                    <div className="card">
                        <DataTable value={this.state.filterProducts}>
                            <Column field={"name"}></Column>
                        </DataTable>
                    </div>
                </div>);
            }
        }
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof App
     */
    render() {
        return (
            <header className="menu">
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>ELC</h1>
                        <nav>
                            <a href="#" className="nav-item">HOLIDAY</a>
                            <a href="#" className="nav-item">WHAT'S NEW</a>
                            <a href="#" className="nav-item">PRODUCTS</a>
                            <a href="#" className="nav-item">BESTSELLERS</a>
                            <a href="#" className="nav-item">GOODBYES</a>
                            <a href="#" className="nav-item">STORES</a>
                            <a href="#" className="nav-item">INSPIRATION</a>

                            <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                                <i className="material-icons search">search</i>
                            </a>
                        </nav>
                    </div>
                </div>
                <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
                    <input type="text" onChange={(e) => this.onSearch(e)}/>
                    <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                        <i className="material-icons close">close</i>
                    </a>
                    <br></br>
                    {this.paintTable()}
                </div>
            </header>
        );
    }


}

// Export out the React Component
module.exports = Menu;