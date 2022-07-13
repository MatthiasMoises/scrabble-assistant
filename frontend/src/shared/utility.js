export const setScoreColor = (score) => {
  let color

  switch (score) {
    case 1:
    case 2:
    case 3:
    case 4:
      color = 'error'
      break
    case 5:
    case 6:
    case 7:
      color = 'warning'
      break
    case 8:
    case 9:
    case 10:
      color = 'success'
      break
    default:
      color = 'secondary'
  }

  return color
}