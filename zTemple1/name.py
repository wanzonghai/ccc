import os
import random

newNameList = []

# 获取需要读取的文件列表
def getFileList():
    scriptPaht = "assets"
    pathList = []
    postfix = [
        ".png",
        ".mp3",
    ]
    for root, dirs, files in os.walk(scriptPaht):
        for name in files:
            isAdd = False
            for postfixStr in postfix:
                if postfixStr == name[name.rfind("."):]:
                   isAdd = True 
                   break
            if isAdd:
                filePath = os.path.join(root, name)
                pathList.append(filePath)
        # for name in dirs:
        #     print(os.path.join(root, name))
    return pathList

# 获得新文件名
def getFileNewNmae():
    nameLength = random.randint(5, 10)
    newName = ""
    for i in range(nameLength):
        isLowerCase = random.randint(1, 2)
        ascllCode = 97
        if(isLowerCase >= 1):
            ascllCode = random.randint(97, 122)
        else:
            ascllCode = random.randint(65, 90)
        newName += chr(ascllCode)
    if newName in newNameList:
        newName = getFileNewNmae()
    return newName

if __name__ == '__main__':
    filepathList = getFileList()
    newNameList = []

    for path in filepathList:

        pathList = path.split("\\")

        dirName = pathList[len(pathList) - 1 - 1]

        if dirName == "notDisrupt" or path.find("notDisrupt") != -1:
            continue

        fileUrl = path[0: path.rfind("\\")]
        fileName = path[path.rfind("\\")+1:]
        suffix = fileName[fileName.rfind("."):]
        newName = getFileNewNmae()

        print(newName)
        newNameList.append(newName)
        os.rename(os.path.join(fileUrl, fileName) , os.path.join(fileUrl, newName+suffix))
        os.rename(os.path.join(fileUrl, fileName+".meta") , os.path.join(fileUrl, newName+suffix+".meta"))