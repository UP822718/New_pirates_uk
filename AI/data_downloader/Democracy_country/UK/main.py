from torch._C import ClassDef
import candidates_democracyclub
import members_api_parliament
import OpinionBee
import wheredoivote

# datas = OpinionBee.Companies()
# for data in datas:
#     print(data,":",datas[data])


# datas = OpinionBee.Parties()
# for i in datas:
#     print(i)


# datas_polls = OpinionBee.Polls()
# for  data in datas_polls:
#     print({"name":data["company"]["code"],"date":data["date"],"type":data["type"]["name"]})
    
#     for data_partys in data['headline']:
#         if data['headline'][data_partys]["change"] == "=":
#             change = 0
#         elif data['headline'][data_partys]["change"] is None:
#             change = None
#         else:
#             change = int(data['headline'][data_partys]["change"])
#         pct = data['headline'][data_partys]["pct"]

#         print("party name:",data_partys,"change:",change,"pct:",pct)

# types =OpinionBee.Types()
# for i in types:
#     print(i)

Parties = { "CON":0 ,"LAB":1 ,"LD":2 ,"UKIP":3 ,"GRN":4 ,"OTH":5 ,"PC":6 ,"SNP":7 ,"IN":8 ,"OUT":11 ,"DK":12 ,"DUP":13 ,"SF":14 ,"UUP":15 ,"SDLP":16 ,"APNI":17 ,"TUV":18 ,"YES":19 ,"NO":20 ,"ALL":21 ,"SDP":22 ,"WE":23 ,"LIB":24 ,"CHUK":25 ,"BRX":26 }
Type = {"WESTVI":0,"EUUK":1,"SCOTC":2,"SCOTR":3,"EUREF":4,"WALC":5,"WALR":6,"NIA":7,"SINDY":8,"SINDYXDK":9,"SCOTW":10,"WALW":11,"EUREFW":12,"LEAD":13,"BESTPM":14}
Companies ={"YG":0,"OP":1,"IPSOS":2,"PB":3,"COMRES":4,"SRVN":5,"ASHC":6,"POP":7,"ICM":8,"TNS":9,"AR":10,"HAR":11,"BPIX":12,"BMG":13,"PEW":14,"ORB":15,"ONE":16,"GQRR":17,"GFK":18,"LT":19,"BES":19,"SMONKEY":20,"NATCEN":21,"SP":22,"NCP":23,"KAN":24,"DP":25,"SKY":26,"HANB":27,"REDWIL":28}
number_days = {"UNK":0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,13:13,14:14,15:15,16:16,18:17,19:18,20:19,21:20,22:21,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33}
areas = {
    "Parishe_Birmingham":0,
    "Parishe_Brighton and Hove":0,
    "Parishe_Castle Point":0,
    "Parishe_Gloucester":0,
    "Parishe_Metropolitan Borough of Gateshead":0,
    "Parishe_Borough of Elmbridge":0,
    "Parishe_Coventry":0,
    "Parishe_Hyndburn":0,
    "Parishe_Manchester":0,
    "Parishe_Mansfield_District":0,
    "Parishe_Middlesbrough":0,
    "Parishe_Borough_of_Rossendale":0,
    "Parishe_Reigate_and_Banstead":0,
    "Parishe_Redditch":0,
    "Parishe_Metropolitan_Borough_of_Oldham":0,
    "Parishe_Slough":0,
    "Parishe_Southend_on_Sea":0,
    "Parishe_Tameside":0,
    "Parishe_Torbay":0,
    "Parishe_Hyndburn":0,
    }

import torch
from torch import nn
class date():
    def __init__(self) -> None:
        pass

class PollEncoder():
    def __init__(self) -> None:
        self.embedding_parties = nn.Embedding(len(Parties),128)
        self.embedding_type = nn.Embedding(len(Type),128)
        self.embedding_companies = nn.Embedding(len(Type),128)
        self.date = Date2Vec(32,"sin")
    def forward():
        pass

class ElectionEncoder():
    def __init__(self) -> None:
        self.embedding_parties = nn.Embedding(len(Parties),128)
        self.date = Date2Vec(32,"sin")
    def forward():
        pass

class SeatEncoder():
    def __init__(self) -> None:
        self.embedding_parties = nn.Embedding(len(Parties),128)
    def forward():
        pass

