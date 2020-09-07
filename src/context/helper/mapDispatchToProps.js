export default function mapDispatchToProps(fn, dispatch) {
  if (typeof fn === 'undefined') {
    throw new Error('mapDispatchToProps must be functions.')
  }

  const newDispatch = fn(dispatch);

  if (typeof newDispatch === 'undefined') {
    return {}
  }

  return newDispatch;
}
