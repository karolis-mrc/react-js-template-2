import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import SearchForm from '../form/SearchForm';

class SearchModal extends Component {
  constructor(context) {
    super(context);

    this.state = {
      showModal: false,
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ showModal: true }, function () {});
  }

  close() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Fragment>
        <div className="search-toggle">
          <button
            onClick={this.open.bind(this)}
            type="button"
            className="btn btn-lg btn-link border-0 p-0 min-w-auto"
            data-toggle="modal"
            data-target="#search-modal"
          >
            Or try Search
          </button>
        </div>

        <Modal
          className="search-modal modal fade"
          tabIndex="-1"
          show={this.state.showModal}
          onHide={this.close}
          backdrop={false}
          aria-labelledby="search-modal"
          aria-hidden="true"
          dialogClassName="modal-full"
          ref={(node) => (this.chart = node)}
        >
          <div className="modal-dialog modal-full" role="document">
            <div className="wrapper">
              <div className="modal-content">
                <div className="modal-header modal-header-top">
                  <button
                    onClick={this.close}
                    type="button"
                    className="close btn btn-link border-0 min-w-auto transform-scale-h"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span className="adveits-i adv-close">
                      <span></span>
                      <span></span>
                    </span>
                  </button>
                </div>

                <div className="modal-body modal-body-centered">
                  <SearchForm />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default SearchModal;
