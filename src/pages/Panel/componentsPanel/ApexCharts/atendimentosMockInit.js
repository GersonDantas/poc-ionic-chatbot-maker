import { format, addDays } from 'date-fns';



for (let i = 0; i < 11; i++) {
  let date = format(addDays(new Date(), i), "dd/MM/yyyy")
  let obj = { [date]:  Math.floor(10* Math.random() + 1)}
  return obj
}

export const atendimentos = []