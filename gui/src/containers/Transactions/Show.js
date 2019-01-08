import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { useHooks, useEffect } from 'use-react-hooks'
import Content from 'components/Content'
import ConfigList from 'components/ConfigList'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import matchRouteAndMapDispatchToProps from 'utils/matchRouteAndMapDispatchToProps'

const TRANSACTION = {
  hash: 'hashA',
  from: 'fromA',
  to: 'toA',
  nonce: 'nonceA',
  value: '10',
  data: 'some data',
  gasLimit: 'gas limit',
  gasPrice: 'gas price'
}

const styles = theme => ({
})

export const Show = useHooks(props => {
  useEffect(() => {
    // fetchJob(jobSpecId)
  }, [])
  const { transaction } = props
  return (
    <div>
      <Content>
        <Card>
          <CardContent>
            <Typography variant='h5' color='secondary'>
              {transaction.hash}
            </Typography>
          </CardContent>

          <Divider />

          <ConfigList
            configs={Object.entries(transaction)}
          />
        </Card>
      </Content>
    </div>
  )
}
)

Show.propTypes = {
  classes: PropTypes.object.isRequired,
  transaction: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  const jobSpecId = ownProps.match.params.jobSpecId
  // const job = jobSelector(state, jobSpecId)
  const transaction = TRANSACTION

  return {jobSpecId, transaction}
}

export const ConnectedShow = connect(
  mapStateToProps,
  // matchRouteAndMapDispatchToProps({fetchJob})
  {}
)(Show)

export default withStyles(styles)(ConnectedShow)
