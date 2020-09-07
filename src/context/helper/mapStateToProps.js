export default function mapStateToProps(fn, state) {
  if (typeof fn === 'undefined') {
    throw new Error('mapStateToProps must be functions.')
  }

  const newState = fn(state);

  if (typeof newState === 'undefined') {
    return {}
  }

  return newState;
}
