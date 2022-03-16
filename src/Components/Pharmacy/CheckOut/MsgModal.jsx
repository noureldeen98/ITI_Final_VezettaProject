import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const MsgModal = (props) => {
	const [msg] = useState(props.msg)
	const [show, setShow] = useState(props.show)
	return (
		<>
			<Modal.Dialog show={show}>
				<Modal.Header closeButton>
					<Modal.Title>
						<i className='fab fa-cc-paypal'></i>
					</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>
						{msg}
					</p>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="primary" onClick={() => setShow(!show)}>Close</Button>
				</Modal.Footer>
			</Modal.Dialog>
		</>
	)
}

export default MsgModal