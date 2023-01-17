import React, { useState } from 'react';



function Card1() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);
    return (
        <div>
            <button variant="primary" onClick={handleShow}>
                Launch demo modal
            </button>

          {show &&   <div role="dialog" aria-modal="true" className="fade modal show" tabindex="-1" style={{ display: "block" }} show={show} >
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}> +</button>
                  </div>

                  <div className="modal-body">Woohoo, you're reading this text in a modal!</div>
                  
              </div>
          </div>
      </div>}
        </div>
    )
}

export default Card1;


