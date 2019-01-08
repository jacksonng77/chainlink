import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Title from 'components/Title'
import List from 'components/Transactions/List'
import Content from 'components/Content'
import matchRouteAndMapDispatchToProps from 'utils/matchRouteAndMapDispatchToProps'
// import jobsSelector from 'selectors/jobs'
// import { fetchJobs } from 'actions'

const TRANSACTIONS = [
  {hash: 'hashA', from: 'fromA', to: 'toA', nonce: 'nonceA'},
  {hash: 'hashB', from: 'fromB', to: 'toB', nonce: 'nonceB'}
]
const fetchTransactions = () => {
  return () => TRANSACTIONS
}

export const Index = props => (
  <Content>
    <Grid container>
      <Grid item xs={12}>
        <Title>Transactions</Title>
      </Grid>
      <Grid item xs={12}>
        <List
          transactions={props.transactions}
          jobCount={props.jobCount}
          pageSize={props.pageSize}
          fetchJobs={props.fetchTransactions}
          history={props.history}
          match={props.match}
        />
      </Grid>
    </Grid>
  </Content>
)

Index.propTypes = {
  jobCount: PropTypes.number.isRequired,
  transactions: PropTypes.array,
  pageSize: PropTypes.number
}

Index.defaultProps = {
  pageSize: 10
}

const mapStateToProps = state => {
  return {
    jobCount: state.jobs.count,
    // transactions: jobsSelector(state)
    transactions: TRANSACTIONS
  }
}

export const ConnectedIndex = connect(
  mapStateToProps,
  matchRouteAndMapDispatchToProps({fetchTransactions})
)(Index)

export default ConnectedIndex
