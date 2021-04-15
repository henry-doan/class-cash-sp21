const UserEnrollment = ({e}) => {
  return(
    <Classroom {...e} />
  )
}

const ConnectedUserEnrollment = (props) => (
  <EnrollmentConsumer>
    { value => (
      <Enrollment {...props} {...value} />
    )}
  </EnrollmentConsumer>
)

export default ConnectedUserEnrollment