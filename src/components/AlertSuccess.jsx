import React from 'react'

function AlertSuccess() {
	return (
		<div className="alert-container alert-success">
			<div className="alert-badge">
				<i className="fas fa-3x fa-check-circle"></i>
			</div>
			<div className="alert-body">
				<p>
					<strong className="alert-body-heading">
						Požadavek byl potvrzen.
					</strong>
				</p>
			</div>
		</div>
	)
}

export default AlertSuccess
