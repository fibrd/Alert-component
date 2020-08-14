import React from 'react'

import AlertSuccess from './AlertSuccess'
import AlertPending from './AlertPending'
import AlertDenial from './AlertDenial'

import './Alert.scss'

function Alert({ request }) {
	if (request === 'success') return <AlertSuccess />
	if (request === 'pending') return <AlertPending />
	return <AlertDenial />
}

export default Alert
