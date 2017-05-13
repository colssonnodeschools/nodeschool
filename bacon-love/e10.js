module.exports = (Bacon, riverFlow, inCriticalMode, isOnBreak, isSingleGate, systemActive, riverFlowLimit) => {
  const shouldReport = isOnBreak.not().and(systemActive.and(isSingleGate).or(inCriticalMode)).toProperty();
  const riverLimitExceeded = riverFlow.combine(riverFlowLimit, (rf, rfl) => rf > rfl).toProperty();
  return shouldReport.and(riverLimitExceeded);
  // return riverLimitExceeded;
};
