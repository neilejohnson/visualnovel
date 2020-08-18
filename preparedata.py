import csv, json
import os

currDir = os.getcwd() + "\\"

with open (currDir + "vndata.csv", "r") as f:
    reader = csv.reader(f)
    next(reader)
    data = {"data": []}
    for row in reader:
        data['data'].append({
            "node_id": row[0],
            "setting": row[1], 
            "char1": row[2],
            "char2": row[3],
            "output": row[4],
        })

with open("vndata.json", "w") as f:
    json.dump(data, f, indent=4)