import React, { Component } from 'react';

import Header from '../Header/Header';
import Card from '../../components/UI/Card';
import Aux from '../../hoc/Auxillary/Auxillary';
import ListItems from '../../components/ListItems/ListItems';
import Pagination from '../Pagination/pagination';
import Modal from '../../components/Modal/Modal';

import { items } from '../../components/ListItems/ListItemsHardCode';
import './Search.css';

const numberElementOnePage = 5;

class Search extends Component {

    state = {
        enteredCummodity: '',
        enteredPrice: '100',
        filteredItems: [],
        activePageNumber: 1,
        filteredItemsOfOnePage: [],
        showModal: false,
        nameSelectedCommodity: '',
        priceSelectedCommodity: ''
    }

    searchHandler = event => {
        event.preventDefault();
        this.setState({activePageNumber: 1});
        this.updateListItemsOfPage();
    };

    updateListItemsOfPage = () => {
        const filteredItems = [];

        for (const item of items) {
            if (
                item.name === this.state.enteredCummodity.trim().toLowerCase() &&
                item.price < +this.state.enteredPrice
            ) {
                filteredItems.push(item);
            }
        }
        this.setState({filteredItems: filteredItems});
    };

    clickedPageNumber = (num) => {
        this.setState({activePageNumber: num});
    };
    

    EditItemHandler = (id, name, price) => {
        this.setState({
            showModal: true,
            nameSelectedCommodity: name,
            priceSelectedCommodity: price
        });
    };

    closeModalHandler = () => {
        this.setState({showModal: false});
    }

    render () {

        let filteredItemsOfOnePage = this.state.filteredItems.slice(
            ((this.state.activePageNumber - 1) * numberElementOnePage),
            ((this.state.activePageNumber) * numberElementOnePage)
        );

        return (
            <Aux>
                {this.state.showModal
                    ?<Modal 
                        onClose={this.closeModalHandler}
                        commodityName={this.state.nameSelectedCommodity}
                        price={this.state.priceSelectedCommodity}
                    /> 
                    : null
                }
                <Header numOfResult={this.state.filteredItems.length} />
                <div className="Search">
                    <Card>
                        <form onSubmit={event => this.searchHandler(event)}>
                            <div className="form-control">
                                <label htmlFor="commodity">Commodity</label>
                                <input type="text" id="commodity" placeholder="Shoe,Blouse,Pants "
                                       value={this.state.enteredCummodity}
                                       onChange={event => this.setState({enteredCummodity: event.target.value})}      
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="price">Price</label>
                                <select name="price" id="price"
                                        value={this.state.enteredPrice}
                                        onChange={event => this.setState({enteredPrice: event.target.value})}
                                >
                                    <option value="100">Under 100 $</option>
                                    <option value="200">Under 200 $</option>
                                    <option value="1000">over 200 $</option>
                                </select>
                            </div>
                            <button type="submit">Search</button>
                        </form>
                    </Card>
                </div>
                {this.state.filteredItems.length > 0 ?
                    <Aux>
                        <ListItems 
                            items={filteredItemsOfOnePage}
                            onEditItem={this.EditItemHandler}    
                        />
                        <Pagination
                            numOfResult={this.state.filteredItems.length} 
                            changePageNumber={this.clickedPageNumber}
                            activePageNumber={this.state.activePageNumber}   
                        />
                    </Aux>
                : null}
            </Aux>
        );
    }
};

export default Search;
