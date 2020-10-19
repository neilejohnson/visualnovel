import csv, json, os
from pprint import pprint

currDir = os.getcwd() + "\\"

with open (currDir + "config.csv", "r") as csvreader:
    reader = csv.reader(csvreader)
    headers = next(reader)
    config = {}
    for row in reader:
        for index, header in enumerate(headers):
            config[header] = row[index]

with open (currDir + "vndata.csv", "r") as csvreader:
    reader = csv.reader(csvreader)
    headers = next(reader)
    data = {}
    for row in reader:
        rowDict = {}
        for index, header in enumerate(headers):
            if row[index]:
                rowDict[header] = row[index]
        data[row[0]] = rowDict

with open("data.js", "w") as jsfile:
    jsfile.write("const config = ")
    json.dump(config, jsfile, indent=4)
    jsfile.write("\n\nconst data = ")
    json.dump(data, jsfile, indent=4)
    jsfile.write("\n\nexport { config, data };")
