const tempData = [
  {
    projectName: "Project 1",
    id: "128104",
    boards: [
      {
        id: "338104",
        title: "TO DO",
        tasks: [
          { id: "233213", text: "this is a task" },
          { id: "113213", text: "another task..." }
        ],
      },
      {
        id: "368104",
        title: "ON GOING",
        tasks: [
          { id: "433213", text: "project 1 's task" },
        ],
      }
    ]

  },
  {
    projectName: "Project 2",
    id: "128122",
    boards: [
      {
        id: "448122",
        title: "TO DO",
        tasks: [
          { id: "233213", text: "prj 2 's task" },
        ],
      }
    ]

  },
  {
    projectName: "Anya Forger",
    id: "158122",
    boards: [
      {
        id: "428122",
        title: "TO DO",
        tasks: [
          { id: "234213", text: "prj 3 's task" },
        ],
      }
    ]

  },

];
//SERVER SENDBACK 1 object from this ARRAY AFTER LOGIN
// PROJECT_MEMBER is the project list that the member join
[{"US_ID":1,
  "US_NAME":"Pham Minh Tai",
  "US_MAIL":null,
  "US_PHONE":null,
  "US_BIRTH":"1970-01-01T00:00:00.000Z",
  "US_GENDER":null,
  "US_ADDRESS":"123,456 duong a/b",
  "USER_ACCOUNT":{
                  "US_ID":1,
                  "US_ACCOUNT":"taigavn113",
                  "US_PASSWORD":"123456",
                  "TOKEN":null
                  },
  "PROJECT_MEMBER":[
                   {"PJ_ID":5,
                    "MEM_ID":1,
                    "MEM_POS":0}]},
 {"US_ID":2,
  "US_NAME":"Pham Minh Tai",
  "US_MAIL":null,
  "US_PHONE":null,
  "US_BIRTH":"1970-01-01T00:00:00.000Z",
  "US_GENDER":null,
  "US_ADDRESS":"123,456 duong a/b",
  "USER_ACCOUNT":
                {"US_ID":2,
                 "US_ACCOUNT":"pmt",
                 "US_PASSWORD":"123456",
                 "TOKEN":null},
  "PROJECT_MEMBER":[{
                    "PJ_ID":5,
                    "MEM_ID":2,
                    "MEM_POS":1}]}]
export default tempData;
