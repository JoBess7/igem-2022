import os
import shutil

pages = ["Home", "Team", "Parts", "Part Collection", "Improve", "Attributions", "Description", "Contribution", "Engineering", "Collaborations", "Human Practices", "Implementation", "Model", "Proof Of Concept", "Partnership", "Communication", "Education", "Hardware", "Inclusivity", "Measurement", "Plant", "Software", "Entrepreneurship", "Sustainable", "Safety", "Results", "Experiments", "Notebook"]
appTemplate = '''function PageName () {
  return (
    <div className="">
      This is the PageName page!
    </div>
  );
}

export default PageName;
'''


indexTemplate = '''import PageName from './PageName' 

export default PageName;
'''

def mkdir(path, name):
    if not os.path.exists(path):
        os.makedirs(path)
        os.makedirs(path + "/components")
        try:
            f = open(path + "/" + "index.tsx", "w")
            f.write(indexTemplate.replace("PageName", name))

            f = open(path + "/" + name + ".tsx", "w")
            f.write(appTemplate.replace("PageName", name))
            f.close()
        except Exception as e:
            print(path, e)

if __name__ == "__main__":
    basedir = os.getcwd() + "/src/pages"
    if os.path.exists(basedir):
      shutil.rmtree(basedir)
      os.makedirs(basedir)
    for page in pages:
        mkdir(os.getcwd() + "/src/pages/" + page.lower().replace(" ", "-"), page.replace(" ", ""))
