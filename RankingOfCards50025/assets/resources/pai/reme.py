# 导入glob和os模块
import glob
import os
# 导入re模块
import re

def getFiles():
    png_files = glob.glob('*.png')
    return png_files

# 定义main方法
def main():
    files = getFiles()
    count = 1
    # 定义正则表达式
    pattern = re.compile(r'组\s(\d+)\.png') # 只有一个数字分组
    for file in files:
        count +=1
        if count >4 :
            count = 1
        # 检查是否匹配正则表达式
        match = pattern.match(file)
        if match:
            # 获取匹配的数字
            group_num = match.group(1)
            # 生成新的文件名
            new_file = str(int(group_num)) + '-' + str((int(count))) + '.png' # 修改了这里
            print("yes")
            # 重命名文件
            os.rename(file, new_file)
        else:
            print("no")


# 调用main方法
if __name__ == "__main__":
    main()
