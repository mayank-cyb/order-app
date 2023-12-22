import RpxCard from "./RpxCard.vue";
export default {
  title: "Molecules/RpxCard",
  component: RpxCard,
  tags: ["autodocs"],
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
      isPaid:true,
      orderStatusPastDue:'PAST DUE',
      orderStatusDueSoon:'DUE SOON',
      paymentStatus:'Paid',
      dueString:'Due',
      dueByStatus:'',
      items:[
        {
           isAssemblyRequired:false,
           value:'4 x 6 Prints',
        },
        {
           isAssemblyRequired:true,
           value:'10 x 11 Canvas',
        },
        {
           isAssemblyRequired:true,
           value:'10 x 11 Canvas',
        },
        {
           isAssemblyRequired:true,
           value:'10 x 11 Canvas',
        },
        
     ],
    }
    }
};
