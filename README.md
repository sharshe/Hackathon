# Hackathon
API's - 

POST /api/empdata/entry

http://10.15.15.229:8900/rest/WishesInvite/1.0.0/api/empdata/entry

{"EmpID":"","EmpName":"Shardul Shekhar","Empmail":"shardul.shekhar@fosteringlinux.com","EmpDOB":"1996-05-19","EmpDOJ":"2019-04-01","EmpDesig":"Admin","IsEmp":"YES"}
{"message":"Employee ID cannot be null"}


{"EmpID":"10001","EmpName":"Shardul Shekhar","Empmail":"shardul.shekhar@fosteringlinux.com","EmpDOB":"1996-05-19","EmpDOJ":"2019-04-01","EmpDesig":"Admin","IsEmp":"YES"}
{"message":"Successfully Inserted"}




POST /api/empdata/search - 

http://10.15.15.229:8900/rest/WishesInvite/1.0.0/api/empdata/search-

{"EmpName":"shardul"}
{"message":[{"EmpId":10001,"EmpName":"shardul shekhar","Empmail":"shardul.shekhar@fosteringlinux.com","EmpDOB":"1996-05-19","EmpDOJ":"2019-04-01","EmpDesig":"Devops","IsEmp":"YES"},{"EmpId":10005,"EmpName":"shardul shekhar","Empmail":"shardul.shekhar1@fosteringlinux.com","EmpDOB":"1995-12-19","EmpDOJ":"2020-07-01","EmpDesig":"Devops","IsEmp":"NO"}]}


{"EmpDOB":"07"}
{"message":[{"EmpId":10003,"EmpName":"Sandeep Rawat","Empmail":"sandeep.s.rawat@fosteringlinux.com","EmpDOB":"1994-07-10","EmpDOJ":"2016-04-01","EmpDesig":"Admin","IsEmp":"YES"}]}




POST /api/empdata/update - 

http://10.15.15.229:8900/rest/WishesInvite/1.0.0/api/empdata/update

{"EmpId":"10005","EmpDOB":"1994-07-10"}
{"message":"Successfully Updated"}


{"EmpId":"10009","IsEmp":"NO"}
{"message":"Employee ID not present in DB"}





echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
