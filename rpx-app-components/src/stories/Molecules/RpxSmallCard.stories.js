import RpxSmallCard from './RpxSmallCard.vue';
export default {
  title: 'Molecules/RpxSmallCard',
  component: RpxSmallCard,
  tags: ['autodocs'],
  argTypes: {
    orderDetails: {  

    },
  }
};
export const Card = {
  args: {
    orderDetails: {
      orderType : 'Web',
      customerName: 'Jack Jonas',
      orderStatusPastDue:'PAST DUE',
      orderStatusDueSoon:'DUE SOON',
      orderId: '423837287',
      dueDateTime:'12/12 @ 5:15 pm',
      printsDimension: '4x6 Prints',
      paymentStatus:'Paid',
      dueString:'Due',
      isPaid:true,
      dueByStatus:'',     
    }
  }
};

