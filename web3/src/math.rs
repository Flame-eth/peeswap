fn checked_ceiling_div(dividend: i128, divisor: i128) -> Option<i128> {
  """
  This function performs checked ceiling division on two i128 integers.

  Args:
      dividend: The dividend (numerator) of the division operation.
      divisor: The divisor (denominator) of the division operation.

  Returns:
      The ceiling division result of the dividend by the divisor, 
      or None if the division overflows.
  """
  if divisor == 0 {
    return None;
  }
  let result = dividend.checked_div(divisor)?;
  if dividend % divisor != 0 {
    Some(result.checked_add(1)?)
  } else {
    Some(result)
  }
}
