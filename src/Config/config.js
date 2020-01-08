export const fieldtypes={
    InputText:"InputText",
    InputDatePicker:'InputDatePicker',
    InputCheckbox:"InputCheckbox",
    InputSelect:"InputSelect"
}
export const ApproveMatrix={
        GeneralMatrix:[
            {
                BU:"MD Office",
                Approver:["",'Maria','Trina']
            },
            {
                BU:"COO",
                Approver:["",'Silas']
            },
            {
                BU:"T & C",
                Approver:["",'Holly']
            },
            {
                BU:"Fin & Sourcing",
                Approver:["",'Kathy']
            },
            {
                BU:"Tech",
                Approver:["",'Mayda','Stephen']
            },
            {
                BU:"R & A",
                Approver:["","Fengqin"]
            },
            {
                BU:"GS",
                Approver:["","Cindy"]
            },
            {
                BU:"AU & Insto",
                Approver:["",'Sean']
            }
        ],
        F4Access:[
            {
                GeneralAccess:true,
                F4ITRoom:false,
                F4OPSPrinting:false,
                AccessLevel:"4F:L1",
                Approver:null
            },
            {
                GeneralAccess:true,
                F4ITRoom:true,
                F4OPSPrinting:false,
                AccessLevel:"4F:L2",
                Approver:["","Maria","Silas","Mayda"]
            },
            {
                GeneralAccess:true,
                F4ITRoom:false,
                F4OPSPrinting:true,
                AccessLevel:"4F:L3",
                Approver:["","Maria","Silas","Sean"]
            },
            {
                GeneralAccess:true,
                F4ITRoom:true,
                F4OPSPrinting:true,
                AccessLevel:"4F:L4",
                Approver:["","Maria","Silas"]
            }
        ],
        F5Access:[
            {
                GeneralAccess:true,
                F5ITRoom:false,
                F5Security:false,
                AccessLevel:"5F:L1",
                Approver:null
            },
            {
                GeneralAccess:true,
                F5ITRoom:true,
                F5Security:false,
                AccessLevel:"5F:L2",
                Approver:["","Maria","Silas","Mayda"]
            },
            {
                GeneralAccess:true,
                F5ITRoom:false,
                F5Security:true,
                AccessLevel:"5F:L3",
                Approver:["","Maria","Silas"]
            },
            {
                GeneralAccess:true,
                F5ITRoom:true,
                F5Security:true,
                AccessLevel:"5F:L2",
                Approver:["","Maria","Silas"]
            }
        ],
        EmailMatrix:[
            {
                name:"Maria",
                email:""
            },
            {
                name:"Trina",
                email:""
            },
            {
                name:"Silas",
                email:""
            },
            {
                name:"Holly",
                email:""
            },
            {
                name:"Kathy",
                email:""
            },
            {
                name:"Mayda",
                email:""
            },
            {
                name:"Stephen",
                email:""
            },
            {
                name:"Fengqin",
                email:""
            },
            {
                name:"Cindy",
                email:""
            },
            {
                name:"Sean",
                email:""
            }
        ]
    }
export const data={
    currentpage:1,
    totalpage:5,
    form:{
        title:'Access Card Application',
        sections:[
                {
            
                title:'Requestor Information',
                id:'reqinfo',
                fields:[
                    {
                        
                            type:fieldtypes.InputText,
                            label:'Lan ID',
                            id:'reqlanid',
                            value:'',
                        
                    },
                    {
                        
                            type:fieldtypes.InputText,
                            label:'Name',
                            id:'reqname',
                            value:'',
                            disabled:true
                        
                        
                    },
                    {
                        
                            type:fieldtypes.InputText,
                            label:'Phone',
                            id:'reqphone',
                            value:'',
                            disabled:true
            
                    },
                    {
                        
                            type:fieldtypes.InputText,
                            label:'Email',
                            id:'reqemail',
                            value:'',
                            disabled:true
                        
                    }
                ]
            },
            {
                title:'Card User Information',
                id:'userinfo',
                fields:[
                    {
                        
                            type:fieldtypes.InputText,
                            label:'User Lan ID',
                            id:'userlanid',
                            value:'',
                        
                    },
                    {
                        
                            type:fieldtypes.InputText,
                            label:'User Chinese Name',
                            id:'usercnname',
                            value:'',
                        
                    } ,
                    {
                        
                            type:fieldtypes.InputText,
                            label:'User English Name',
                            id:'userenname',
                            value:'',
                        
                    },
                    {
                        
                            type:fieldtypes.InputText,
                            label:'User Phone',
                            id:'4',
                            value:'',
                        
                    },
                    {
                        
                            type:fieldtypes.InputSelect,
                            label:'Business Unit',
                            id:'bu',
                            value:'',
                            options:[
                                '',
                                'MD Office',
                                'COO',
                                'T & C',
                                'FIN & Sourcing',
                                'AU & Insto',
                                'GS',
                                'R & A',
                                'Tech'
                            ]
                        
                    },
                    {
                        
                        type:fieldtypes.InputText,
                        label:'Building',
                        id:'building',
                        value:'default building address',
                        disabled:true
                    
                    },
                ]
            },
            {
                title:'Request Information',
                id:'reqinfo',
                fields:[
                        {
                                type:fieldtypes.InputSelect,
                                label:'Reqeust Type',
                                id:'reqtype',
                                value:'',
                                options:[
                                    '',
                                    'New Card',
                                    'Replace Card',
                                    'Amend Cardd'
                                ]    
                        },
                        {
                                type:fieldtypes.InputSelect,
                                label:'Replace Reason',
                                id:'repreason',
                                value:'',
                                options:[
                                    '',
                                    'Lost',
                                    'Fault',
                                    'Damage'
                                ]    ,
                                hidden:true 
                        },
                        {
                                type:fieldtypes.InputSelect,
                                label:'Card Type',
                                id:'cardtype',
                                value:'',
                                options:[
                                    '',
                                    'Employee',
                                    'Visitor',
                                    'Contractor'
                                ]      
                        }
                ]
            },
            {
                title:'Access Information',
                id:'accessinfo',
                fields:[
                        {
                                type:fieldtypes.InputDatePicker,
                                label:'Effective Date',
                                id:'effdate',
                                value:'',
                        },
                        {
                                type:fieldtypes.InputDatePicker,
                                label:'Expire Date',
                                id:'expdate',
                                value:'',
                                diabled:false
                        },
                        {
                                type:fieldtypes.InputSelect,
                                label:'Access Time',
                                id:'accesstime',
                                value:'',
                                options:[
                                        "",
                                        "6:00-23:00 Mon-Fri",
                                        "6:00-23:00 Mon-Sun",
                                        "7 * 24 hours"
                                ]
                        },
                        {
                                type:fieldtypes.InputCheckbox,
                                label:'General Access',
                                id:'genaccess',
                                value:true,
                                disabled:true
                        },
                        {
                                type:fieldtypes.InputCheckbox,
                                label:'4F IT Room',
                                id:'f4it',
                                value:false,
                        },
                        {
                                type:fieldtypes.InputCheckbox,
                                label:'5F IT Room',
                                id:'f5it',
                                value:false,
                        },
                        {
                                type:fieldtypes.InputCheckbox,
                                label:'Security Room',
                                id:'securityroom',
                                value:false,
                        },
                        {
                                type:fieldtypes.InputCheckbox,
                                label:'OPS Printing Room',
                                id:'opsprinting',
                                value:false,
                        },
                ]
            },
            {
                title:'Approver',
                id:"approver",
                fields:[
                        {
                                type:fieldtypes.InputSelect,
                                label:'General Approver',
                                id:'genapprover',
                                value:false,
                                options:[]
                        },
                        {
                                type:fieldtypes.InputSelect,
                                label:'Special Approver',
                                id:'speapprover',
                                value:false,
                                options:[],
                                hidden:true
                        },
                ]
            }
        ]
    }
}

export const autapp={
    currentpage:1,
    totalpage:1,
    form:{
        title:"Automation Tracker",
        id:'aut',
        sections:[
            {
                title:"Automtaion Initiative",
                id:'initiative',
                fields:[
                    {
                        label:"Requestor",
                        id:"req",
                        type: fieldtypes.InputText,
                        vlaue:''
                    },
                    {
                        label:"Line Manager",
                        id:'linemanager',
                        type:fieldtypes.InputText,
                        value:''
                    },
                    {
                        label:'Project Name',
                        id:'prjname',
                        type:fieldtypes.InputText,
                        value:''
                    },
                    {
                        label:'Description',
                        id:'disp',
                        type:fieldtypes.InputText,
                        value:''
                    },
                    {
                        label:'Related System',
                        id:'system',
                        type:fieldtypes.InputText,
                        value:'',
                    },
                    {
                        label:'FTE Saving',
                        id:'saving',
                        type:fieldtypes.InputText,
                        value:''
                    },
                    {
                        label:'Benefit Description',
                        id:'benefitdisp',
                        type:fieldtypes.InputText,
                        value:''
                    }

                ]
            }
        ]
    }
}

