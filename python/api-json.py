import urllib.request, urllib.parse, urllib.error
import json
from PIL import Image

SERVICE_URL = "https://api.tvmaze.com/search/shows?"
PARAM = "friends"
url = SERVICE_URL + urllib.parse.urlencode({"q": PARAM})

print("Retriving ", url)

uh = urllib.request.urlopen(url)
data = uh.read().decode()

print("Retrieved", len(data), "characters")

try :
  js = json.loads(data)
except :
  js = None
  
if not js :
  print("==== Fail ====")
  print(data)
  exit()

score1 = js[0]["score"]
summ = js[0]["show"]["summary"]
img_file = js[0]["show"]["image"]["original"]

print("Number of results ", len(js))
print("The first score is ", score1)
print("Summary: ", summ)
print("Poster: ", img_file)

IMAGE_LOCAL_PATH = "python/api-json-image.png"

urllib.request.urlretrieve(img_file, IMAGE_LOCAL_PATH)
img = Image.open(IMAGE_LOCAL_PATH)
img.show()