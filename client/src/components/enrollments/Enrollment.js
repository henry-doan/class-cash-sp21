import EnrollmentConsumer from '../../providers/EnrollmentProvider'

const Enrollment = ({classroomId, showEnrollment}) => {

  return(
    <>
      <h3>000</h3>
    </>
  )
}

const ConnectedEnrollment = (props) => (
  <EnrollmentConsumer>
    { value => (
      <Enrollment {...props} {...value} />
    )}
  </EnrollmentConsumer>
)

export default ConnectedEnrollment