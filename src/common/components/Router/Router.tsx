import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { concatStrings } from '../../../utils/string'
import { RouteDelimiter } from '../../global'
import { RoutesComponentsMapper } from '../../Routes'

function Router () {
  return (
    <Routes>
      {RoutesComponentsMapper.map((Element, index) => (
        <React.Fragment key={index}>
          <Route
            path={concatStrings(RouteDelimiter, [Element.route])}
            element={<Element.component />}
          />
        </React.Fragment>
      ))}
    </Routes>
  )
}

export default Router
