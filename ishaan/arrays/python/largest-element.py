array = [2, 5, 1, 3, 0]

def largestBrute(arr):
    arr.sort()
    return arr[-1]

def largestOptimal(arr):
    result = arr[0]

    for num in arr:
        if num > result:
            result = num
    
    return result


print(largestBrute(array))
print(largestOptimal(array))
