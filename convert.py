import re

chasefile = "chasenov.CSV"
discoverfile = "discovernov.csv"
venmofile = "venmonov.csv"
emojifile = "emojis.csv"

emojidict = {}
emojidata = open(emojifile)
for line in emojidata:
    emojidict[line.split(",")[0].replace("\\x","")] = line.split(",")[1].strip()
        

class Transaction:
    def __init__(self, date, received, paid, note, detailson, time="", unknown=""):
        self.date = date
        self.time=time
        self.received = received
        self.paid = paid
        self.note = note
        self.unknown = unknown
        self.detailson = detailson
    def toStr(self):
        return "\t".join([self.date, self.time, str(self.received), str(self.paid), "", self.note, self.unknown, self.detailson])

trnsxns = {}


venmoactivity = open(venmofile, encoding="utf8")
linenum = 1
for line in venmoactivity:
    if linenum < 5:
        linenum+=1
    else:
        info = line.split(",")
        if (info[1] == ""):
            break
        datestr0 = info[2].split("T")[0]
        date = "/".join(datestr0.split("-")[1:] + [datestr0.split("-")[0]])
        time = info[2].split("T")[1]
        paid = -1*float(info[8].replace(" $", ""))
        detailson = "venmo " + date.replace("/", "")[0:4]

        vmnote = info[5]
        vmnoteenc = str(info[5].encode("utf-8")).replace("b'", "").replace("'","")
        note = ""

        if vmnote == vmnoteenc:
            note = vmnoteenc
        else:
            for tok in vmnoteenc.split(" "):
                if "\\x" in tok:
                    note += emojidict[tok.replace("\\x", "").upper()] + " "
                else:
                    note += tok + " "

        note = note.strip() + ", venmo " + ("from " if info[3] == "Payment" else "to ") + info[6]
        
        if "Standard Transfer" not in info[3]:
            indexint = int(date.replace("/",""))
            while indexint in trnsxns.keys():
                indexint+=1
            trnsxns[indexint] = Transaction(date, "", paid, note.lower(), detailson, time=time)
            
chaseactivity = open(chasefile)
labels = True
   
for line in chaseactivity:
    if labels:
        labels = False
    else:
        info = line.split(",")
        creddeb = info[0]
        postdate = info[1]
        desc = info[2]
        amt = info[3]
        
        date = postdate
        datesindesc = re.findall(r"\d\d/\d\d", desc)
        idsindesc = re.findall(r"\w\w\w ID: \d\d\d\d\d\d\d\d\d\d", desc)
        note = desc.replace("\"","").strip().replace("\t", "|")
        if len(datesindesc) > 0:
            date = datesindesc[0] + postdate[5:]
            note = note.replace(datesindesc[0], "").strip()
        for id in idsindesc:
            note = note.replace(id, "").strip()
        
        regnotes = {"VENMO": "venmo", "Suncrest": "rent", "The Blessing": "tithe", "LTIMINDTREE": "ltimindtree", "McDonalds":"mcd", "SPECTRUM":"spectrum", "Reliant":"reliant"}
        for key in regnotes:
            if key in note:
                note = regnotes[key]
        
        if "Zelle payment to " in note:
            note = "zelle to " + note.split(" ")[3].lower()
        
        received = amt if creddeb == "CREDIT" else ""
        paid = -1 * float(amt) if creddeb == "DEBIT" else ""


        detailson = "chase " + postdate.replace("/", "")[0:4]
        if not ("DISCOVER" in note and "E-PAYMENT" in note) and not ("Online Transfer to SAV ...2558" in note)and not ("Online Transfer from SAV ...2558" in note) and not (note=="venmo" and received != ""):
            indexint = int(date.replace("/",""))
            while indexint in trnsxns.keys():
                indexint+=1
            
            foundInVenmo = False
            if note == "venmo":
                for key in trnsxns:
                    checkTrnsxn = trnsxns[key]
                    if "venmo " in checkTrnsxn.detailson and paid == checkTrnsxn.paid:
                        checkTrnsxn.detailson = detailson
                        foundInVenmo = True
                        break
                if not foundInVenmo:
                    trnsxns[indexint] = Transaction(date, received, paid, note.lower(), detailson, unknown="NOT FOUND IN VENMO")
            else:
                trnsxns[indexint] = Transaction(date, received, paid, note.lower(), detailson)

chaseactivity.close()



discoveractivity = open(discoverfile)
labels = True
   
for line in discoveractivity:
    if labels:
        labels = False
    else:
        info = line.split(",")
        trxdate = info[0]
        postdate = info[1]
        desc = line.split("\"")[1]
        amt = info[-2]

        date = trxdate
        received = ""
        paid = amt
        note = desc
        detailson = "discover " + postdate.replace("/","")[:4]
        
        if "DIRECTPAY FULL BALANCE" not in note:
            indexint = int(date.replace("/",""))
            while indexint in trnsxns.keys():
                indexint+=1
            trnsxns[indexint] = Transaction(date, received, paid, note.lower(), detailson)

discoveractivity.close()

trnsxnkeys = list(trnsxns.keys())
trnsxnkeys.sort()
for key in trnsxnkeys:
    print(trnsxns[key].toStr())
