# Check if array is sorted
arr = [1, 2, 4, 3, 4, 5]

# Brute
def brute(arr):

    new_arr = sorted(arr)
    
    if new_arr == arr:
        return True
    return False


# Optimal
def optimal(arr):
    for i in range(1,len(arr)):
        if (arr[i] < arr[i-1]):
            return False
    return True

print(brute(arr))
print(optimal(arr))
