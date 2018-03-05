import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getAllergenName } from '../datasets/allergens'

const Box = styled.div`
  background-color: #a358b3;
  color: white;
  padding: 10px 10px 10px 40px;
  margin-bottom: 10px;
  border-radius: 5px;
  position: relative;
  min-height: 40px;
  line-height: 20px;
`

const Icon = styled.div`
  position: absolute;
  left: 10px;
`

const _getAlertsForProduct = (product, alert) => {
  const retVal = []

  const prodE = product.e || []
  const prodA = product.a || []

  alert.e
    .filter(e => prodE.some(e1 => e === e1.id))
    .forEach(e => retVal.push(e))

  alert.a
    .filter(a => prodA.indexOf(a) !== -1)
    .forEach(a => retVal.push(getAllergenName(a)))

  if (alert.po && product.po) {
    retVal.push('palmoil')
  }

  if (alert.gf && product.gf) {
    retVal.push('gf')
  }
  return retVal
}

@connect((store) => ({ alert: store.alert }))
export default class AlertBox extends PureComponent {
  render() {
    const info = _getAlertsForProduct(this.props.product, this.props.alert)

    if (!info.length) {
      return null
    }

    return (
      <Box>
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 447 447" fill="currentColor">
            <path d="M326.39 233.237v-30.34c0-48.263-33.197-88.766-78-99.938V72.124c0-13.807-11.193-25-25-25s-25 11.193-25 25v30.834c-44.803 11.172-78 51.676-78 99.938v30.34a122.31 122.31 0 0 1-35.822 86.483 35.252 35.252 0 0 0 24.926 60.178h62.148c0 28.579 23.168 51.747 51.747 51.747s51.747-23.168 51.747-51.747h62.148a35.252 35.252 0 0 0 24.926-60.178 122.307 122.307 0 0 1-35.82-86.482zm-103 168.407c-11.992 0-21.747-9.756-21.747-21.747h43.495c-.001 11.992-9.757 21.747-21.748 21.747zm118.747-54.989a5.237 5.237 0 0 1-4.852 3.242H109.494a5.236 5.236 0 0 1-4.852-3.241 5.236 5.236 0 0 1 1.138-5.723c28.767-28.766 44.609-67.013 44.609-107.696v-30.34c0-40.252 32.748-73 73-73s73 32.748 73 73v30.34c0 40.682 15.842 78.929 44.609 107.696a5.233 5.233 0 0 1 1.139 5.722z"/><path d="M86.146 233.065c7.842-2.671 12.034-11.193 9.362-19.035-16.559-48.616 9.521-101.639 58.137-118.199 7.842-2.671 12.034-11.193 9.362-19.035-2.671-7.842-11.193-12.036-19.035-9.362-64.274 21.892-98.754 91.995-76.862 156.269 2.125 6.239 7.954 10.167 14.197 10.167 1.605 0 3.237-.259 4.839-.805z"/><path d="M130.078 44.416c7.842-2.671 12.034-11.193 9.363-19.035-2.672-7.842-11.194-12.036-19.036-9.362C27.665 47.606-22.086 148.755 9.503 241.496c2.125 6.239 7.954 10.167 14.197 10.167a14.98 14.98 0 0 0 4.838-.805c7.842-2.671 12.034-11.193 9.362-19.035-26.254-77.081 15.096-161.152 92.178-187.407zM302.806 67.434c-7.843-2.673-16.364 1.521-19.035 9.362-2.671 7.842 1.521 16.364 9.362 19.035 48.616 16.56 74.696 69.583 58.138 118.199-2.671 7.842 1.52 16.364 9.362 19.035a14.98 14.98 0 0 0 4.838.805c6.243 0 12.072-3.929 14.197-10.167 21.893-64.274-12.588-134.377-76.862-156.269z"/><path d="M428.523 105.788c-20.947-42.587-57.224-74.468-102.149-89.77-7.843-2.674-16.364 1.52-19.035 9.362-2.671 7.842 1.521 16.364 9.362 19.035 37.34 12.719 67.492 39.216 84.902 74.613 17.41 35.397 19.994 75.455 7.275 112.794-2.671 7.842 1.521 16.364 9.362 19.035a14.98 14.98 0 0 0 4.838.805c6.243 0 12.072-3.929 14.197-10.167 15.303-44.924 12.195-93.12-8.752-135.707z"/>
          </svg>
        </Icon>
        { info.join(', ') }
      </Box>
    )
  }
}
