import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import HeaderLogo from '../../blocks/logo/HeaderLogo';
import SearchModal from '../../components/modal/SearchModal';
import ModalMenuPrimary from '../../blocks/menu/ModalMenuPrimary';

class MenuModal extends Component {
  constructor(context) {
    super(context);

    this.state = {
      showModal: false,
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Fragment>
        <div className="menu-toggle no-space">
          <button
            onClick={this.open.bind(this)}
            type="button"
            className="btn btn-link border-0 p-0 min-w-auto"
            data-toggle="modal"
            data-target="#menu-modal"
          >
            <span className="adveits-i adv-hamburger">
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        <Modal
          className="menu-modal fade"
          tabIndex="-1"
          show={this.state.showModal}
          onHide={this.close}
          backdrop={false}
          aria-labelledby="menu-modal"
          aria-hidden="true"
          dialogClassName="modal-full"
          ref={(node) => (this.chart = node)}
        >
          <div className="modal-dialog modal-full h-100" role="document">
            <div className="wrapper h-100">
              <div className="modal-content h-100">
                <div className="modal-header modal-header-top">
                  <HeaderLogo logoColor="light" />

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

                <div className="modal-body d-flex justify-content-between">
                  <div className="align-self-start">
                    <SearchModal />
                  </div>

                  <div className="align-self-center animated fadeinright">
                    <ModalMenuPrimary />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default MenuModal;
