import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const App = () => {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Routes>
					<Route path="/" />
				</Routes>
			</BrowserRouter>
		</RecoilRoot>
	)
}

export default App
