export const validatePayment = (paymentState) => {
   if (paymentState.amount.lenght < 0 || paymentState.amount === 0) {
     return 'Pole Kwota Przelewu jest wymagane';
   } else if (paymentState.amount < 5) {
     return 'Kwota przelewu musi być większa niż 5PLN';
   } else if (!paymentState.paymentMethod) {
     return 'Proszę wybrać metodę płatności';
   } else if (!paymentState.typeOfPayment) {
     return 'Proszę określic typ przelewu';
   }
   return null;
 };