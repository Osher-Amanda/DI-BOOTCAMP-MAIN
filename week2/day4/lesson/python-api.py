import requestsimport json
import os

response = requests.get('https://api.chucknorris.io/jokes/random')


#print(response) it will print a response code

data = response.json()

print(data['value'])
#print(data['joke']) crashes the code - causes an error - due to the square brackets
print(data.get('joke')) #this will cause the crashed code to return null then provide us with the answer we want?  - it fixes the crashed code?
#So .get is what fixes the code

print('end')

with open(file_path, 'w, encoding='utf-8') as f:
          json.dump(data, f)
          print('json file successful created')


          file_path = os.path.join(dir_path, "jokes.json") #should this go further before (prior to all this code that applies to this?)