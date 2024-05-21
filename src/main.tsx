import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { FullPage } from './FullPage.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App>
			<FullPage />
		</App>
	</React.StrictMode>
)
