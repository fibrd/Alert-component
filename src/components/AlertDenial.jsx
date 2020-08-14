import React from 'react'

function AlertDenial() {
	return (
		<div className="alert-container alert-denial">
			<div className="alert-badge">
				<i className="fas fa-3x fa-times-circle"></i>
			</div>
			<div className="alert-body">
				<div className="alert-main">
					<p>
						<strong className="alert-body-heading">
							Požadavek nebyl potvrzen.
						</strong>
						<a href="#top">⟳ Zkusit znovu</a>
					</p>
				</div>
			</div>
		</div>
	)
}

export default AlertDenial
