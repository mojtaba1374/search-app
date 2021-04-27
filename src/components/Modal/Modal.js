import React from 'react';
// import { CSSTransition } from 'react-transition-group';
import Card from '../UI/Card';
import './Modal.css';

const modal = React.memo(props => {

  return (
    <React.Fragment>
        <div className="Backdrop" onClick={props.onClose} />
        <div className="Modal">
            <h2>Edit Commodity</h2>
            <Card>
                <form>
                    <div className="form-control">
                        <label htmlFor="commodity">Commodity</label>
                        <input type="text" id="commodity" defaultValue={props.commodityName} placeholder="Commodity name"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="price">Price</label>
                        <input type="text" id="commodity" defaultValue={props.price} placeholder="Price"/>
                    </div>
                    <div className="Modal__actions">
                        <button type="button" onClick={props.onClose}>
                            Cancle
                        </button>
                        <button type="button" onClick={props.onClose}>
                            Okay
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    </React.Fragment>
  );
});

export default modal;
