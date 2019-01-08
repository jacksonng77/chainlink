import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
// TODO:
// - don't title case config ENV vars
// - Add toggle header prop. No header for transaction show, DO want header for config
// - If we have time try to make the value column closer to the key column on large screens
import { titleCase } from 'change-case'

const renderFetching = () => (
  <TableRow>
    <TableCell component='th' scope='row' colSpan={3}>...</TableCell>
  </TableRow>
)

const renderError = error => (
  <TableRow>
    <TableCell component='th' scope='row' colSpan={3}>
      {error}
    </TableCell>
  </TableRow>
)

const renderConfigs = configs => (
  configs.map(([k, v]) => (
    <TableRow key={k}>
      <TableCell>
        <Typography variant='body1'>
          <Fragment>
            {titleCase(k)}
          </Fragment>
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant='body1'>
          <Fragment>
            {v}
          </Fragment>
        </Typography>
      </TableCell>
    </TableRow>
  ))
)

const renderBody = (configs, error) => {
  if (error) {
    return renderError(error)
  } else if (configs.length === 0) {
    return renderFetching()
  } else {
    return renderConfigs(configs)
  }
}

const ConfigList = ({showHead, configs, error}) => (
  <Table>
    {showHead &&
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography variant='body1' color='textSecondary'>Key</Typography>
          </TableCell>
          <TableCell>
            <Typography variant='body1' color='textSecondary'>Value</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
    }
    <TableBody>
      {renderBody(configs, error)}
    </TableBody>
  </Table>
)

ConfigList.propTypes = {
  configs: PropTypes.array.isRequired,
  error: PropTypes.string,
  showHead: PropTypes.bool
}

ConfigList.defaultProps = {
  showHead: false
}

export default ConfigList
