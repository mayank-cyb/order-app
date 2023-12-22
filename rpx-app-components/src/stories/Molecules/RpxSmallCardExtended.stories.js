import RpxSmallCardExtended from './RpxSmallCardExtended.vue';
export default {
  title: 'Molecules/RpxSmallCardExtended',
  component: RpxSmallCardExtended,
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
      orderId: '423837287',
      dueDateTime:'12/12 @ 5:15 pm',
      orderStatusPastDue:'PAST DUE',
      orderStatusDueSoon:'DUE SOON',
      printsDimension: '4x6 Prints',
      dueString:'Due',
      paymentStatus:'Paid',
      isPaid:true,
      dueByStatus:'pastdue',
      items:[
         {
            isAssemblyRequired:false,
            value:'4 x 6 Prints'
         },
         {
            isAssemblyRequired:true,
            value:'10 x 11 Canvas'
         }
      ],
    }
    }
};