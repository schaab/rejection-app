import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import {
  newQuestionReducer,
  updateQuestion,
  updateAskee,
  updateStatus,
  addQuestion,
  questionSubmitted,
} from '../redux'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
})

const NewQuestion = ({ classes = {}, dispatchAddQuestion }) => {
  const [state, dispatch] = useReducer(newQuestionReducer, newQuestionReducer())

  const handleOnClick = () => {
    const { question, askee, status } = state
    dispatchAddQuestion({ question, askee, status })
    dispatch(questionSubmitted())
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="question">Question</InputLabel>
        <Input
          id="question"
          value={state.question}
          onChange={({ target: { value } }) =>
            dispatch(updateQuestion({ question: value }))
          }
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="askee">Askee</InputLabel>
        <Input
          id="askee"
          value={state.askee}
          onChange={({ target: { value } }) =>
            dispatch(updateAskee({ askee: value }))
          }
        />
      </FormControl>
      <FormControl className={classes.formControl} component="fieldset">
        <RadioGroup
          name="status"
          value={state.status}
          onChange={({ target: { value } }) =>
            dispatch(updateStatus({ status: value }))
          }>
          <FormControlLabel
            value="Accepted"
            control={<Radio />}
            label="Accepted"
          />
          <FormControlLabel
            value="Rejected"
            control={<Radio />}
            label="Rejected"
          />
        </RadioGroup>
      </FormControl>
      <Button
        color="primary"
        size="large"
        variant="outlined"
        onClick={handleOnClick}>
        Submit
      </Button>
    </form>
  )
}

NewQuestion.displayName = 'NewQuestion'
NewQuestion.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatchAddQuestion: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ dispatchAddQuestion: addQuestion }, dispatch)

export default compose(
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps
  )
)(NewQuestion)
