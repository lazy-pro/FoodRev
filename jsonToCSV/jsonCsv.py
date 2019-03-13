import csv, json, sys ,ast
#if you are not using utf-8 files, remove the next line
#sys.setdefaultencoding("UTF-8") #set the encode to utf8
#check if you pass the input file and output file

def get_leaves(item, key=None):
    if isinstance(item, dict):
        leaves = []
        for i in item.keys():
            leaves.extend(get_leaves(item[i], i))
        return leaves
    elif isinstance(item, list):
        leaves = []
        for i in item:
            leaves.extend(get_leaves(i, key))
        return leaves
    else:
        return [(key, item)]

# if sys.argv[1] is not None and sys.argv[2] is not None:

#     fileInput = sys.argv[1]
#     fileOutput = sys.argv[2]
#     inputFile = open(fileInput,newline='')  #decode("utf-8") open json file
#     outputFile = open(fileOutput, 'w', newline='') #load csv file
#     data = json.load(inputFile) #load json content
#     # inputFile.close() #close the input file
#     print(data)
#     output = csv.writer(outputFile) #create a csv.write
#     # output.writerow(data.keys())  # header row
#     # # #for row in data:
#     # output.writerow(data.values()) #values row

#     write_header = True

#     for entry in data:
#         leaf_entries = sorted(get_leaves(entry))

#         if write_header:
#             output.writerow([k for k, v in leaf_entries])
#             write_header = False

#         output.writerow([v for k, v in leaf_entries])

with open('PrayagData.txt', newline='') as f_input, open('test.csv', 'w', newline='') as f_output:
    csv_output = csv.writer(f_output)
    write_header = True

    for itr in json.load(f_input):
        for entry in itr['restaurants']:
            leaf_entries =get_leaves(entry)

            if write_header:
                csv_output.writerow([k for k, v in leaf_entries])
                write_header = False

            csv_output.writerow([v for k, v in leaf_entries])