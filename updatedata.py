import csv, json, os

currDir = os.getcwd() + "\\"

with open (currDir + "vndata.csv", "r") as csvreader:
    reader = csv.reader(csvreader)
    headers = next(reader)
    data = {}
    for row in reader:
        rowDict = {}
        for index, header in enumerate(headers):
            rowDict[header] = row[index]
        data[row[0]] = rowDict

with open("data.js", "w") as jsfile:
    jsfile.write("const data = ")
    json.dump(data, jsfile, indent=4)