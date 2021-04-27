import React, { Component } from 'react';

import './pagination.css';

const numberElementOnePage = 5;

class Pagination extends Component {

    onClickeNumber = (num) => {
        this.props.changePageNumber(num);
    };
    
    render () {
        const numberOfElement = Math.ceil(this.props.numOfResult / numberElementOnePage);
        const arrayLengthOfSearchedElement = [];
        for (let i=0; i < numberOfElement; i++) {
            arrayLengthOfSearchedElement.push(i+1);
        }

        return (
            <div className="pagination">
                <ul>
                    {arrayLengthOfSearchedElement.map(num => {
                        let activeClass = this.props.activePageNumber === num ? 'active' : '';
                        return <li 
                                    key={num}
                                    className={`pageNumber ${activeClass}`}
                                    onClick={() => this.onClickeNumber(num)}
                                >
                                    <span>{num}</span>
                               </li>
                    })}
                </ul>
            </div>
        );
    }
} 

export default Pagination;
