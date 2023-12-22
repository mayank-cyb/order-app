const orders = [
    {
        "orderId": 1,
        "customerName": "Maude Runolfsdottir",
        "email": "Maude.Runolfsdottir@paris.info",
        "address": "123 Ursula Estate",
        "dueDateTime": "02/12 @5:15 pm",
        "balance": "$4,844.13",
        "orderType": "Web",
        "items": [  
            {
            "isAssemblyRequired":false,
            "value":'4X6 Prints',
            },
            {
                "isAssemblyRequired":true,
                "value":'10X11 Canvas',
            },
            {
                "isAssemblyRequired":false,
                "value":'11X14 Canvas',
            },
            {
                "isAssemblyRequired":true,
                "value":'5X7 Mounted Print',
            },
            {
                "isAssemblyRequired": true,
                "value":"4X6 prints",
            },            
            {
                "isAssemblyRequired": true,
                "value": "11X14 Canvas",
            },        {
                "isAssemblyRequired": true,
                "value":"5X7 Mounted Print",
            },            
            {
                "isAssemblyRequired": false,
                "value": "CD",
            },         
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            }
        ],
        "allocatedPrinters":  ["DL650-A1"],
        "isQueued": true,
        "isCompleted": false,
        "dueByStatus": "duesoon",
        "isPaid": true
    },
    {
        "orderId": 2,
        "customerName": "Christina Keeling",
        "email": "turquoiseturtle07@gmail.com",
        "address": "9223 Dallin Glens",
        "dueDateTime": "04/14 @5:15 pm",
        "balance": "$656.24",
        "orderType": "Scan",
        "items": [            {
            "isAssemblyRequired":true,
            "value":'Express Scan',
        }],
        "allocatedPrinters":  ["DL650-A1", "P6000", "CX3240"],
        "isQueued": true,
        "isCompleted": false,
        "dueByStatus": "duesoon",
        "isPaid": false
    },
    {
        "orderId": 3,
        "customerName": "Abigayle Deckow",
        "email": "Abigayle.Deckow@lina.com",
        "address": "3237 Frederik Lodge",
        "dueDateTime": "01/05 @5:15 pm",
        "balance": "$4,242.36",
        "orderType": "Passport",
        "items": ["Passport Photo"],
        "allocatedPrinters":  ["DL650-A2", "P6000"],
        "isQueued": true,
        "isCompleted": false,
        "dueByStatus": "duesoon",
        "isPaid": false
    },
    {
        "orderId": 4,
        "customerName": "Oswald Johnson",
        "email": "tealwolf41@gmail.com",
        "address": "8687 Sanford Gardens",
        "dueDateTime": "12/15 @5:15 pm",
        "balance": "$6,535.26",
        "orderType": "Kiosk",
        "kiosk": false,
        "items": [
            {
                "isAssemblyRequired":false,
                "value":'5X7 Mounted Print',
            },
        ],
        "allocatedPrinters":  ["CX3240"],
        "isQueued": false,
        "isCompleted": false,
        "dueByStatus": "duesoon",
        "isPaid": false
    },
    {
        "orderId": 5,
        "customerName": "Carrie Kuhlman",
        "email": "Carrie.Kuhlman@bo.name",
        "address": "4822 Katelyn Walk",
        "dueDateTime": "11/08 @5:15 pm",
        "balance": "$5,159.88",
        "orderType": "Web",
        "web": true,
        "kiosk": false,
        "items": [
            {
                "isAssemblyRequired": true,
                "value":"11X14 Canvas",
            }
        ],
        "allocatedPrinters":  ["P6000"],
        "isQueued": false,
        "isCompleted": false,
        "dueByStatus": "pastdue",
        "isPaid": true
    },
    {
        "orderId": 6,
        "customerName": "Bennett Dooley",
        "email": "Bennett.Dooley@jesse.net",
        "address": "748 Ryan Field",
        "dueDateTime": "01/02 @5:15 pm",
        "balance": "$4,602.50",
        "orderType": "Web",
        "web": true,
        "kiosk": false,
        "items": [
            {
                "isAssemblyRequired": true,
                "value":"11X14 Canvas",
            },            
            {
                "isAssemblyRequired": true,
                "value": "16X20 Poster",
            }
        ],
        "allocatedPrinters":  ["FF680"],
        "isQueued": false,
        "isCompleted": false,
        "dueByStatus": "",
        "isPaid": true
    },
    {
        "orderId": 7,
        "customerName": "Green Route",
        "email": "Green.Route@jesse.net",
        "address": "7451 Ryan Field",
        "dueDateTime": "07/02 @5:15 pm",
        "balance": "$4,600",
        "orderType": "Passport",
        "web": false,
        "kiosk": true,
        "items": ["Passport Photo"],
        "allocatedPrinters":  ["FF680"],
        "isQueued": false,
        "isCompleted": false,
        "dueByStatus": "",
        "isPaid": false
    },
    {
        "orderId": 8,
        "customerName": "Kim Dyla",
        "email": "Kim.Dyla@jesse.net",
        "address": "74 Ryan Field",
        "dueDateTime": "07/05 @5:15 pm",
        "balance": "$4,60",
        "orderType": "Web",
        "web": false,
        "kiosk": true,
        "items": [
            {
                "isAssemblyRequired": true,
                "value":"4X6 prints",
            },            
            {
                "isAssemblyRequired": true,
                "value": "11X14 Canvas",
            },        {
                "isAssemblyRequired": true,
                "value":"5X7 Mounted Print",
            },            
            {
                "isAssemblyRequired": false,
                "value": "CD",
            },         
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            }
        ],
        "allocatedPrinters":  ["FF680"],
        "isQueued": false,
        "isCompleted": false,
        "dueByStatus": "pastdue",
        "isPaid": false
    },
    {
        "orderId": 9,
        "customerName": "Jason Justice",
        "email": "Jason.Justice@jesse.net",
        "address": "74 Corn Field",
        "dueDateTime": "07/01 @5:15 pm",
        "balance": "$4,690",
        "orderType": "Passport",
        "web": true,
        "kiosk": false,
        "items": ["Passport Photo"],
        "allocatedPrinters":  ["FF680"],
        "isQueued": false,
        "isCompleted": true,
        "dueByStatus": "duesoon",
        "isPaid": true,
    },
    {
        "orderId": 10,
        "customerName": "Danny Petrilli",
        "email": "Danny.Petrilli@jesse.net",
        "address": "7451 Wake Field",
        "dueDateTime": "06/03 @5:15 pm",
        "balance": "$4,69",
        "orderType": "Kiosk",
        "web": true,
        "kiosk": false,
        "items": [
            {
                "isAssemblyRequired": true,
                "value":"4X6 prints",
            },            
            {
                "isAssemblyRequired": true,
                "value": "11X14 Canvas",
            },        {
                "isAssemblyRequired": true,
                "value":"5X7 Mounted Print",
            },            
            {
                "isAssemblyRequired": false,
                "value": "CD",
            },         
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            }
        ],
        "allocatedPrinters":  ["P6000"],
        "isQueued": false,
        "isCompleted": true,
        "dueByStatus": "duesoon",
        "isPaid": true
    },
    {
        "orderId": 11,
        "customerName": "Ryan Justice",
        "email": "Ryan.Justice@jesse.net",
        "address": "123 Verde Estate",
        "dueDateTime": "08/03 @5:15 pm",
        "balance": "$5, 059.88",
        "orderType": "Kiosk",
        "web": true,
        "kiosk": false,
        "items": [{
            "isAssemblyRequired": false,
            "value": "11X14 Canvas" ,
        }],
        "allocatedPrinters":  ["P6000"],
        "isQueued": false,
        "isCompleted": true,
        "dueByStatus": "pastdue",
        "isPaid": true
    },
    {
        "orderId": 12,
        "customerName": "Jason Eich",
        "email": "Jason.Eich@jesse.net",
        "address": "123 Trump Tower",
        "dueDateTime": "08/04 @5:15 pm",
        "balance": "$5, 009.88",
        "orderType": "Kiosk",
        "web": true,
        "kiosk": false,
        "items": [{
            "isAssemblyRequired": false,
            "value": "11X14 Canvas" ,
        }],
        "allocatedPrinters":  ["P6000"],
        "isQueued": true,
        "isCompleted": false,
        "dueByStatus": "duesoon",
        "isPaid": true
    },
    {
        "orderId": 13,
        "customerName": "Brendon Eich",
        "email": "Brendon.Eich@jesse.net",
        "address": "123 Verde Tower",
        "dueDateTime": "08/05 @5:15 pm",
        "balance": "$5, 009.88",
        "orderType": "Kiosk",
        "web": true,
        "kiosk": false,
        "items": [{
            "isAssemblyRequired": false,
            "value": "11X14 Canvas" ,
        }],
        "allocatedPrinters":  ["P6000"],
        "isQueued": true,
        "isCompleted": false,
        "dueByStatus": "",
        "isPaid": true
    },
    {
        "orderId": 14,
        "customerName": "McGrawth",
        "email": "McGrawth@jesse.net",
        "address": "7451 Wake Field",
        "dueDateTime": "06/03 @5:15 pm",
        "balance": "$4,69",
        "orderType": "Kiosk",
        "web": true,
        "kiosk": false,
        "items": [
            {
                "isAssemblyRequired": true,
                "value":"4X6 prints",
            },            
            {
                "isAssemblyRequired": true,
                "value": "11X14 Canvas",
            },        {
                "isAssemblyRequired": true,
                "value":"5X7 Mounted Print",
            },            
            {
                "isAssemblyRequired": false,
                "value": "CD",
            },         
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            },
            {
                "isAssemblyRequired": false,
                "value": "16X20 Poster",
            }
        ],
        "allocatedPrinters":  ["P6000"],
        "isQueued": false,
        "isCompleted": true,
        "dueByStatus": "duesoon",
        "isPaid": true
    },
]

export default orders