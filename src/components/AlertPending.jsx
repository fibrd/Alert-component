import React from 'react'

function AlertPending() {
	return (
		<div className="alert-container alert-pending">
			<div className="alert-badge">
				<i className="fas fa-3x fa-clock"></i>
			</div>
			<div className="alert-body">
				<div className="alert-main">
					<p>
						<strong className="alert-body-heading link-confirmation">
							Potvrzení požadavku
						</strong>
						<a href="#top">Odeslat SMS</a> s potvrzovacím kódem.
					</p>
				</div>
			</div>
		</div>
	)
}

export default AlertPending
