const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 0
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 4500,
  createdAt: 0
}]

const empty = []

// const total = expenses.reduce((accumulator, expense) => accumulator + expense.amount, 0)
// const total = (expenses) => {
//   return expenses.reduce((accumulator, expense) => accumulator + expense.amount, 0)
// }

const total = (empty) => {
  return empty
    .map((expense) => expense.amount)
    .reduce((accumulator, value) => accumulator + value, 0)
}

console.log(total(expenses))