import xml.etree.ElementTree as etree
import csv

tree = etree.parse('strings.xml');
root = tree.getroot()

strings = root.findall('string')

finalArray = []
for string in strings:
    name = string.get('name')
    value = string.text.encode('utf-8')
    print name, value
    finalArray.append([name, value])

with open('python-result.csv', 'wb') as csvfile:
    spamwriter = csv.writer(csvfile, delimiter=',',
                            quotechar='|', quoting=csv.QUOTE_MINIMAL)
    for data in finalArray:
        spamwriter.writerow(data)
